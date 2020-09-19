window.onload=function(){
    let admin;
    let name = "john";
    let clickMe = document.getElementById("click");
    clickMe.onclick = function () {
        admin=name;
        alert(admin);
    }
    let isBoss = this.confirm("Are you the boss?");
    if(isBoss){
        alert("Wow~");
    }else{
        alert("Garbage");
    }
}

