window.onload=function () {
    let promptResult = this.prompt("Please input your name:");
    if(promptResult){
        this.alert("Hi,"+promptResult+"!");
    }
}