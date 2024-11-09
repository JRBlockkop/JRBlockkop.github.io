const sentence = {
   time_1:"",
   subject:"",
   frequencyverb_1:"",
   verb:"",
   frequencyverb_2:"",
   object:"",
   manner:"",
   place:"",
   time_2:"",
   write:function (){
      if(time_1=""){
         return this.subject.charAt(0).toUpperCase()+this.subject.slice(1)
      }
   }
}
