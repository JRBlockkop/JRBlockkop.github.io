const Pin = {
    console:{
        status:"off",
    },
    data:null,
    User:{
        data:null,
        name:null,
        sha:null,
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
    Pin.User.data = JSON.parse(document.getElementById("ifrdata").contentDocument.body.innerHTML);
    Pin.User.name = JSON.parse(document.getElementById("ifrdata").contentDocument.body.innerHTML).username;
    Pin.User.sha = JSON.parse(document.getElementById("ifrdata").contentDocument.body.innerHTML).shapassword;
}
function DataUserSetN(name){
    document.getElementById("ifrdata").contentDocument.location.href = "https://jrblockkop.github.io/pintab/data.html?username="+name
}
function LoginData(username,password){
    fetch("https://JRBlockkop.github.io/pintab/db.json").then(x=>x.text()).then(y=>Pin.data=y)
    console.log(Pin.data)
}
