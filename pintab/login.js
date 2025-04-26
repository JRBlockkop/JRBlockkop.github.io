const Pintab = {
    IsLogin:false,
    route:"/",
    login:()=>{
        if(Pintab.IsLogin==false){
            update()
            let r = new URL(location.href);
            r.pathname=Pintab.route;
            window.open("https://jrblockkop.github.io/pintab/login?r="+r,"Pintab","popup,left=100,top=100,width=385,height=420")
        }
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
        Pintab.IsLogin=true;
        try {
            Pintab.afterlogin()
        } catch (error) {
            console.error(error)
        }
    }else{
        requestAnimationFrame( update );
    }
}

