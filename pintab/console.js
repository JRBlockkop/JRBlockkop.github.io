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

function CheckLogin(){
    if(Pin.User.data.username!="" || Pin.User.data.shapassword!=""){
        return false;
    }
}
function BntLogin(){
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
function DataUserSetP(sha){
    document.getElementById("ifrdata").contentDocument.location.href = "https://jrblockkop.github.io/pintab/data.html?shapassword="+sha
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
        }
    }
    console.log(Pin.data)
}
