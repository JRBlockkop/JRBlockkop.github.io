const data = [];
function WordtoToken(str){
   return Get.data[Get.words.indexOf(str)].v
}
function TokentoWord(arr){
   return Get.data[Get.words.indexOf(str)].v
}
function Send(){
   let Tokens = document.querySelector("textarea").value.split(" ")
   LLM(Tokens);
}
function LLM(Tokens){
   
}
let Get;
async function Start(num){
   let x = await fetch("https://jrblockkop.github.io/ai/language.json")
   let y = await x.text()
   Get = JSON.parse(y)
}
Start()
