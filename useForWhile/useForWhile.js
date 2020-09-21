window.onload=function () {

    /*  1  */
    let num = this.Number(this.prompt("Please enter a number bigger than 100:"));
    while(num<=100&&num){
        this.alert("The number is illegal!")
        num = this.Number(this.prompt("Please enter a number bigger than 100:"));
    }

    /*  2  */
    let flag=true;
    let theNum = this.Number(this.prompt("Please enter a number bigger than 1:"));
    while (theNum==null||theNum==undefined||theNum==this.NaN||theNum<=1){
        alert("Please enter a proper number!")
        this.Number(this.prompt("Please enter a number:"));
    }

    for (let i = 2; i < theNum;i++){
        if(theNum%2==0&&theNum!=2){
            flag=false;
            break;
        }
    }
    if(flag){
        this.alert("The number you enter is a 质数");
    }else{
        this.alert("The number you enter is not a 质数");
    }


}