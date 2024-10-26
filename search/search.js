periodictable = {
  list:["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","N","O","F","Ne"],
  data:[{name:"Hydrogen",symbol:"H",electrons:1,protons:1,neutrons:0,mass:1.0078},
        {name:"Helium",symbol:"He",electrons:2,protons:2,neutrons:2,mass:4.0026},
        {name:"Lithium",symbol:"Li",electrons:3,protons:3,neutrons:4,mass:6.9410},
        {name:"Beryllium",symbol:"Be",electrons:4,protons:4,neutrons:5,mass:9.0122},
        {name:"Boron",symbol:"B",electrons:5,protons:5,neutrons:5,mass:10.811},
        {name:"Carbon",symbol:"C",electrons:6,protons:6,neutrons:6,mass:12.011},
       ],
}
function result(elmtid,href,name,main_title,title,text,keyword){
    document.getElementById(elmtid).innerHTML = "<div class='result_title'><div class='top_title'></div>"+title+"</div><div>"+text+"</div>"
}
function atom(str){
    document.getElementById("specialresult").innerHTML="<h1>"+periodictable.data[periodictable.list.indexOf(str)].name+"</h1><p><u><b>Symbol:</u></b>"+periodictable.data[periodictable.list.indexOf(str)].symbol+"</p>"+"<p><u><b>Atomic mass:</u></b>"+periodictable.data[periodictable.list.indexOf(str)].mass+"</p>"
}
