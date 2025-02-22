const Pintab = {
    IsLogin:false,
    route:"/",
    login:()=>{
        const iframe = document.createElement("iframe");
        iframe.src = "https://jrblockkop.github.io/pintab/auth"
        document.appendChild(iframe);
        href = location.href
        window.open("https://jrblockkop.github.io/pintab/login?r="+href + Pintab.route,"Pintab","popup,left=100,top=100,width=380,height=420")
    },
    User:{
        name:"",
        token:"",
    },
}
