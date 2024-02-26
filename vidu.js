var a =document.getElementById("vd");
var b = document.getElementById("btn");
var d = document.getElementById("vd2");
b.addEventListener("click",function(){
    var c =a.value;
    var e =d.value;
    alert(((c*30)/100)/e);
})