const Pin = {
    console:{
        status:"off",
    },
    data:null,
    User:{
        data:{
            username:"",
            shapassword:"",
        },
        name:null,
        role:null,
    },
    time:function(){
        
    },
    status:function (){
    }
}
let Get;
let Het;
let Jet;
const SHA256 = val =>
    crypto.subtle
    .digest('SHA-256', new TextEncoder('utf-8').encode(val))
    .then(h => {
      let hexes = [],
        view = new DataView(h);
      for (let i = 0; i < view.byteLength; i += 4)
        hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
      return hexes.join('');
    });

async function CheckLogin(){
    if(Pin.User.data.username!="" || Pin.User.data.shapassword!=""){
        await fetch("https://JRBlockkop.github.io/pintab/db.json").then(x=>x.text()).then(y=>Pin.data=JSON.parse(y))
        await SHA256(Pin.User.data.username).then(x=> Get = x);
    }
}
function BntLogin(){
    window.location = "https://JRBlockkop.github.io/pintab/login"
}
function Sestion(){
    
}
async function UserLoginBtn(){
    let URLSP = new URLSearchParams(location.search);
    href = URLSP.get("r")
    href_URL = new URL(href);
    document.getElementById('signinshown').innerHTML='<div style="display: flex;">Continue to <div id="host"> '+href_URL.hostname+'</div></div><button id="signInBtn">'+Pin.User.name+'</button>';
    document.getElementById('signInBtn').onclick=()=>{
        if(href_URL.protocol!="javascript:"){
            let TimeDate = new Date()
            let shatoken;
            await SHA256(Pin.User.name + "." + Pin.User.data.shapassword + "." + TimeDate.getTime()).then(x=> shatoken = x);
            let datatoken = TimeDate.getTime()+"."+Pin.User.name;
            location.href = href + "?name="+Pin.User.data.username+"&token="+ datatoken+"."+shatoken;
        }
    }
}
async function AlreadyLogin(){
    DataUserGet()
    if(Pin.User.data.username!="" || Pin.User.data.shapassword!=""){
        await fetch("https://JRBlockkop.github.io/pintab/db.json").then(x=>x.text()).then(y=>Pin.data=JSON.parse(y))
        await SHA256(Pin.User.data.username).then(x=> Get = x);
        await SHA256(Pin.User.data.shapassword).then(x=> Het = x)
          
        if(Pin.data.data.users.name.indexOf(Get)!=-1){
            if(Pin.data.data.users.dsha[Pin.data.data.users.name.indexOf(Get)]==Het){
                Pin.User.name = Pin.User.data.username;
                document.getElementById("obenbar").innerHTML = '<div class="Account" onclick="AccountMenu()"><div class="icon-color red">'+Pin.User.name[0]+'</div></div>';
            }
        }
    }else{
        document.getElementById("obenbar").innerHTML = '<button class="Loginbutton" onclick="BntLogin()" title="Login">Login</button>'
    }
}
function DataUserGet(){
    if(window.localStorage.getItem("name")!=null){
        Pin.User.data.username = window.localStorage.getItem("name")
    }
    if(window.localStorage.getItem("sha")!=null){
        Pin.User.data.shapassword = window.localStorage.getItem("sha")
    }
}
function DataUserSet(name,sha,t){
    window.localStorage.setItem("name",name)
    window.localStorage.setItem("sha",sha)
    window.localStorage.setItem("t",t)
}

async function LoginData(username,password){
    await fetch("https://JRBlockkop.github.io/pintab/db.json").then(x=>x.text()).then(y=>Pin.data=JSON.parse(y))
    await SHA256(username).then(x=> Get = x)
    await SHA256(password).then(x=> Het = x)
    await SHA256(Het).then(x=> Jet = x)
    if(Pin.data.data.users.name.indexOf(Get)!=-1){
        if(Pin.data.data.users.dsha[Pin.data.data.users.name.indexOf(Get)]==Jet){
            Pin.User.name = username;
            DataUserSet(username,Het,Pin.time());
            setTimeout( async ()=>{
                if(new URLSearchParams(location.search).get("r")==null){
                    window.location = "https://JRBlockkop.github.io/pintab/mystuff"
                }else{
                    location.reload();
                }
            },500)
        }
    }
}
let AccountMenuBool=true;
function AccountMenu(){
    AccountMenuBool=!AccountMenuBool;
    if(!AccountMenuBool){
        document.getElementById("account-menu").style.display = "block"
    }else{
        document.getElementById("account-menu").style.display = "none"
    }
}
function Logout(){
    window.localStorage.clear()
    window.location = "https://JRBlockkop.github.io/pintab/"
    window.top.location.reload();
}
