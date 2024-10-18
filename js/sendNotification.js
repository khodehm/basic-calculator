 function checkBrowserCapeability(){
    if(Notification in window){
        console.log('your browser is good to go !')
    }
    else{
        console.log('your Browser dos not support nptification')
    }
}

  async function getUserPremission(){
    const premossion = await Notification.requestPermission();
    if(premossion=== "granted"){
        console.log("premission Granted");
        sendNotificationToClient();
    }
    else{
        console.log('premission denied')
    }
}

const sendNotificationToClient =async () =>{
    const notification = new Notification('خوش آمدید!',{
        badge:"",
        body:"این یک برنامه ماشین حساب هست",
        data:"",
        icon:'',
    
        

    })
    console.log(notification);
}
checkBrowserCapeability()
getUserPremission();