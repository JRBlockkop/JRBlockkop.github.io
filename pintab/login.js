const Pintab = {
    IsLogin:false,
    route:"/",
    login:()=>{
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
        try {
            Pintab.afterlogin()
        } catch (error) {
            console.error(error)
        }
    }else{
        requestAnimationFrame( update );
    }
}
document.body.onload=update()
