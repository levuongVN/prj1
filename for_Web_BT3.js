var but = document.getElementById("btn");
var anh_but =document.getElementById("btn2");
var click_cl_op = true;
but.addEventListener("click",function(){
    if(click_cl_op==true){
        var left=anime({
            targets:'#back_left ',
            left:-5,
            duration:1000,
            direction: "alternate",
            loop:0
        })
        var right=anime({
            targets:'#back_right',
            right:-5,
            duration:1000,
            direction: "alternate",
            loop:0
        })
        var text_2 = anime({
            targets: '#text_2',
            left:-1000,
            duration:1000,
            direction:'ease-in-out',
            loop:0
        })
        var menu = anime({
            targets:'#detail',
            top:25,
            duration:1000,
            direction:'ease-in-out',
            loop:0,
        })
        menu.play()
        text_2.play()
        left.play()
        right.play()
        click_cl_op =false;
    }else{
        var left=anime({
            targets:'#back_left ',
            left:-45,
            duration:1000,
            direction: "alternate",
            loop:0
        })
        var right=anime({
            targets:'#back_right',
            right:-45,
            duration:1000,
            direction: "alternate",
            loop:0
        })
        var text_2 = anime({
            targets: '#text_2',
            left:30,
            duration:1000,
            direction:'ease-in-out',
            loop:0
        })
        var menu = anime({
            targets:'#detail',
            top:-52,
            duration:1000,
            direction:'ease-in-out',
            loop:0,
        })
        menu.play()
        text_2.play()
        left.play()
        right.play()
        click_cl_op=true;
    }

})