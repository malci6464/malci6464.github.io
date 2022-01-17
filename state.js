// state tables
// state guards before each change of state

//request 
connect - pause - disconnect

connectActions = { previouslyActivatedCheck, timeRemainingCheck, maxDevicesCheck, refundedCheck} //pausestatenotrelevant
pauseActions = {timeRemainingCheck}

//xstate
//services - checks
const connectCheck = {
	check if voucher has been activated (in active pool of vouchers) => updateSucessProps => send successConnect update
	check if voucher has time remaining (implies activation)
	check if refunded (implies valid)
	// paused not relevant here
}
//actions - assign vals - redirect
add SuccessProps = {paused=false, expired=false,cancelled/refunded=false}
add pausedProps = {paused=true, expired=false,cancelled/refunded=false}
add expiredProps = {paused=false, expired=true,cancelled/refunded=false}
add maxDeviceProps = {paused=false, expired=false,cancelled/refunded=false, maxDevicesExceeded = true}
?refunded?
	

//events - composed of actions
send expiredUpdate = {text}
send invalidUpdate
send successConnect update
	
	
// potential of approved groups - much less checks
	
	
Cases :[connectRequest(), pauseRequest()] 

ComputedRelationships(){
if(States.voucher.voucherValid){
  then States.session.expired = false
}
	
//toggle state - defined props - enumerate number of states


//create toggle functions - comp properties - series of heirarchical guards

States: {
	voucher: {
    		voucherValid : Boolean, 
  },
  	session : {
      		activated: Boolean,
      		paused: Boolean,
      		expired: Boolean,
      		deviceCountUnderMax: Boolean,
  },
  	pack:{
    		pauseFacilityEnabled: Boolean
  },
	thisDevice: {
   	 	online: Boolean, 
  },
}

function connectRequest(voucherNumber){
  updateStates(voucherNumber)
	if (States.voucher.voucherValid){
		attemptActivationOnThisDevice()
	} else {
    checkIfExpired()
	}
}
  
function pauseRequest(voucherNumber){
  updateStates(voucherNumber)
  //assume vouchervalid and session activated true
  if(States.thisDevice.online && !States.session.paused && States.pack.pauseFacilityEnabled ){
    pauseRequest()
    //success = send pause warning popup, post to server
    //failure = sorry it wasnt possible to pause this time
    updateState()
  }
}

function updateStates(){
   this.States = dbresponse()
}

function checkIfExpired(){
    if(State.session.expired){
        return popup('Your session has expired')
    } else{
    return popup('Sorry your voucher is not valid')}
}
		

function attemptActivationOnThisDevice(){
  if(States.thisDevice.online){
     return popup('You are already connected')
  }
  //possible states - paused==true or activated==true or false
  else if( deviceCountUnderMax && activated){
    //dont need duplicate guard for expired/invalid voucher
    restartSession()
  }
  else if (deviceCountUnderMax && !activated){
   startSession()
  }
  else{
  //possible states deviceCountUnderMax == false
    return popup('Sorry youve reached your maximum number of devices')
  }
}
