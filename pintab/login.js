const Pintab = {
    IsLogin:false,
    login:()=>{
        href = location.href
        window.open("https://jrblockkop.github.io/pintab/login?r="+href,"Pintab","popup,left=100,top=100,width=380,height=420")
    },
    User:{
        name:"",
        token:"",
    },
}
