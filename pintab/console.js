const Pin = {
    console:{
        status:"off",
    },
    status:function (){
        if(Pin.User.name != ''){
            document.getElementById("obenbar").innerHTML = '<div class="Account"><div class="icon-color red">'+Pin.User.name[0]+'</div>'+Pin.User.name+'</div>';
        }
    }
}
function LoginStart(){
    window.location = "file:///E:/Janneck/HTML/Pintab/login.html"
}
function DataUserGet(){
    document.getElementById("ifrdata")
}