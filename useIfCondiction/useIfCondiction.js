window.onload=function () {
    let input = this.prompt("Please input a number:");
    let responce = (input>=18)?"You are an adult.":"You just a child."
    this.alert(responce);
/* 1 */ 
    let officialNameJS = this.prompt("What is the official name of JavaScript?");
    if(officialNameJS=="ECMAScript"){
        this.alert("Yes,you are right.")
    }else{
        this.alert("Oh, you are so stupid.");
    }
/* 2 */ 
    let number =prompt("Please enter a number:");
    if(number>0){
        this.alert(1);
    }else if (number<0) {
        this.alert(-1);
    }else{
        this.alert(0);
    }
/*  3  */
    let a=this.prompt("Please enter a number :");
    let b = this.prompt("Please enter a number again:")
    let result = (a+b<4)?"Below":"Over";
    this.alert("a="+a+",b="+b+"and the result is:"+result);
/*  4  */
    let message = (login=='Employee')?'hello':
    (login=='Director')?'Greetings':
    (login=='')?'No login':
    '';
}