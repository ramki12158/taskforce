function fun(){
    var a = new Date();
    document.getElementsByClassName("hours")[0].innerHTML=a.getHours();
    document.getElementsByClassName("minutes")[0].innerHTML=a.getMinutes();
    document.getElementsByClassName("seconds")[0].innerHTML=a.getSeconds();
    document.getElementsByClassName("msec")[0].innerHTML=a.getMilliseconds();
}
setInterval(fun,1);