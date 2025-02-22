const Pintab = {
    IsLogin:false,
    route:"/",
    login:()=>{
        const iframe = document.createElement("iframe");
        iframe.src = "https://jrblockkop.github.io/pintab/auth"
        iframe.style.display = "none"
        iframe.id = "pintab-login"
        document.body.appendChild(iframe);
        href = location.href
        window.open("https://jrblockkop.github.io/pintab/login?r="+href + Pintab.route,"Pintab","popup,left=100,top=100,width=380,height=420")
    },
    User:{
        name:"",
        token:"",
    },
    afterlogin:()=>{},
}
function update(){
    if(localStorage.getItem("pintab_name")!=null){
        Pintab.User.name = localStorage.getItem("pintab_name");
        Pintab.User.token = localStorage.getItem("pintab_sha");
        console.log('logedIn')
    }else{
        requestAnimationFrame( update );
    }
}
update()
