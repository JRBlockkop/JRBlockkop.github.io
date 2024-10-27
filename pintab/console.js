const Pin = {
    console:{
        status:"off",
    },
    data:null,
    User:{
        data:null,
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
    window.location = "https://JRBlockkop.github.io/pintab/login.html"
}
function AlreadyLogin(){
    DataUserGet()
    if(Pin.User.data.username!="" || Pin.User.data.shapassword!=""){
        await fetch("https://JRBlockkop.github.io/pintab/db.json").then(x=>x.text()).then(y=>Pin.data=JSON.parse(y))
        await SHA256(Pin.User.data.username).then(x=> Get = x);
        await SHA256(Pin.User.data.shapassword).then(x=> Het = x
          
        if(Pin.data.data.users.name.indexOf(Get)!=-1){
            if(Pin.data.data.users.dsha[Pin.data.data.users.name.indexOf(Get)]==Het){
                Pin.User.name = Pin.User.data.username;
            }
        }
    }
}
function DataUserGet(){
    Pin.User.data = JSON.parse(document.getElementById("ifrdata").contentDocument.body.innerHTML);
}
function DataUserSetN(name){
    document.getElementById("ifrdata").src = "https://jrblockkop.github.io/pintab/data.html?username="+name
}
function DataUserSetP(sha){
    document.getElementById("ifrdata").src = "https://jrblockkop.github.io/pintab/data.html?shap="+sha
}
async function LoginData(username,password){
    await fetch("https://JRBlockkop.github.io/pintab/db.json").then(x=>x.text()).then(y=>Pin.data=JSON.parse(y))
    await SHA256(username).then(x=> Get = x)
    await SHA256(password).then(x=> Het = x)
    await SHA256(Het).then(x=> Jet = x)
    if(Pin.data.data.users.name.indexOf(Get)!=-1){
        if(Pin.data.data.users.dsha[Pin.data.data.users.name.indexOf(Get)]==Jet){
            DataUserSetN(username);
            DataUserSetP(Het);
            Pin.User.name = username;
        }
    }
}
