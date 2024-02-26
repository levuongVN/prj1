var take = document.getElementById("your_bill");// TAKE bill now
var take_quality = document.getElementById("select");
var but = document.getElementById("btn");
var share= document.getElementById("people");
var text1 = document.getElementById("text_1");
var text2= document.getElementById("text_2");
var text_icon = document.getElementById("text_$")
var text_3=document.getElementById("text_3");
but.addEventListener("click",function(){
    var a = take.value;
    var b = take_quality.value;
    var c = share.value;
    if(b=="Verry good"){
        text1.textContent="TIP AMOUNT"
        text2.textContent="$"+(((a*30)/100)/c).toFixed(2);
        text_3.textContent="Each"
    }if(b=="Good"){
        text1.textContent="TIP AMOUNT"
        text2.textContent="$"+(((a*20)/100)/c).toFixed(2);
        text_3.textContent="Each"
    }if(b=="Normal"){
        text1.textContent="TIP AMOUNT"
        text2.textContent="$"+(((a*15)/100)/c).toFixed(2);
        text_3.textContent="Each"
    }if(b=="Bad"){
        text1.textContent="TIP AMOUNT"
        text2.textContent="$"+(((a*10)/100)/c).toFixed(2);
        text_3.textContent="Each"
    }
})

   /* take.addEventListener("input",function(){// Sự kiện "input" Sẽ cập nhật dữ liệu đầu vào khi người dùng nhập thêm cái gì đó
        var a = take.value;
        take_quality.addEventListener("input",function(){
            var b = take_quality.value;
            share.addEventListener("input",function(){
                var d = share.value;
                if(b=="Verry good"){
                    var c = ((a*30)/100)/d;
                    but.addEventListener("click",function(){
                        text1.textContent="TIP AMOUNT";
                        text2.textContent=c.toFixed(2);
                    })
                }else if( b== "Good"){ 
                    var c = (a*20)/100;
                    but.addEventListener("click",function(){
                        text1.textContent="TIP AMOUNT";
                        text2.textContent=c.toFixed(2);
                    })
                }else if(b== "Normal"){
                    var c = ((a*30)/100)/d
                    but.addEventListener("click",function(){
                        text1.textContent="TIP AMOUNT";
                        text2.textContent=c.toFixed(2);
                    })
                }else if(b== "Bad"){
                    var c = ((a*30)/100)/d
                    but.addEventListener("click",function(){
                        text1.textContent="TIP AMOUNT";
                        text2.textContent=c.toFixed(2);
                    })
                   }
            })
        })
    })*/
