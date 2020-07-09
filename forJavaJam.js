var x = document.getElementById("myBtn");
var y = document.getElementById("myBtn1");
x.addEventListener("click", fun);
y.addEventListener("click", fun1);
function fun(){
    var x = Number(document.getElementById("shirtquantity").value);
    var N = 14.95;
    if(isNaN(x)){
        alert("Invalid input");
    }
    else{
        var total = x * (N + N * 0.08);
        document.getElementById("demo").innerHTML = total.toPrecision(4);
    }
}
function fun1(){  
    var x = Number(document.getElementById("cupquantity").value);
    var N = 9.95;
    if(isNaN(x)){
        alert("Invalid input");
    }
    else{
        var total = x * (N + N * 0.08);
        document.getElementById("demo1").innerHTML = total.toPrecision(4);
    }
}

var d = new Date(); 
document.getElementById("year").innerHTML= d.getFullYear();