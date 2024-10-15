const Pin = {
    console:{
        status:"off",
    },
    User:{
        name:null,
    },
    status:function (){
        if(JSON.parse(document.getElementById("ifrdata").contentDocument.body.innerHTML).username!=''){
            Pin.User.name=JSON.parse(document.getElementById("ifrdata").contentDocument.body.innerHTML).username
        }
        if(Pin.User.name != ''){
            document.getElementById("obenbar").innerHTML = '<div class="Account"><div class="icon-color red">'+Pin.User.name[0]+'</div>'+Pin.User.name+'</div>';
        }
    }
}
function LoginStart(){
    window.location = "https://JRBlockkop.github.io/pintab/login.html"
}
function DataUserGet(){
    JSON.parse(document.getElementById("ifrdata").contentDocument.body.innerHTML).username
}
function DataUserSetN(name){
    document.getElementById("ifrdata").contentDocument.location.href = "https://jrblockkop.github.io/pintab/data.html?username="+name
}
function LoginData(username,password){
    Pin.User.name=username;
    location.reload();
}
