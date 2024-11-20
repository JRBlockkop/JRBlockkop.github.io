const data = [];
function WordtoToken(str){
   return Get.data[Get.words.indexOf(str)].v
}
let Get;
async function Start(num){
   let x = await fetch("https://jrblockkop.github.io/ai/language.json")
   let y = await x.text()
   Get = JSON.parse(y)
}
Start()
