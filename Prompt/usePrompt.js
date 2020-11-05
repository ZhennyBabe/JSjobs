window.onload=function () {
 let promptResult = this.prompt("Please input your name:");
 if(promptResult){
    this.alert("Hi,"+promptResult+"!");
 }   
    let i =3;
    if(i>5){
        this.alert(i);
    }else{
        //continue;
    }
    alert(i+1);
}