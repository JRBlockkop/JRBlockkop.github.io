periodictable = {
  list:["H","He","Li","Be","B","C","N","O","F","Ne"],
  data:[{name:"Hydrogen",symbol:"H",electrons:1,protons:1,neutrons:0}],
}
function result(string){
    
}
function atom(str){
    document.getElementById("specialresult").innerHTML="<h1>"+periodictable.data[periodictable.list.indexOf(str)].name+"</h1><br><u><b>Symbol:</u></b><p>"+periodictable.data[periodictable.list.indexOf(str)].symbol+"</p>"
}
