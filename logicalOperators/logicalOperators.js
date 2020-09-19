window.onload=function() {
   let userName = this.prompt("Please enter your name:");

   if(userName=="Admin"){
       let userPassword = this.prompt("Hey,"+userName+"! Please enter your password:");
       
       if(userPassword=="The Master"){
           this.alert("Welcome,"+userName);
       }else if(userPassword==""||userPassword==null){
           this.alert("Canceled");
       }else{
           this.alert("Wrong password");
       }

   }else if(userName==""||userName==null){
       this.alert("Canceled")
   }else{
       this.alert("Sorry,I don't konw you.")
   }
}