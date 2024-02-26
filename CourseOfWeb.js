var but_left_slide = document.getElementById("left_slide");
var but_right_slide = document.getElementById("right_slide");
var anh_slide = document.getElementById("img_slide");
var change_img_slide1=0;
var change_img_slide2=0;
var dot1 =document.getElementById("dot1");
var dot2 =document.getElementById("dot2");
var dot3 =document.getElementById("dot3");
var text_expl1 = document.getElementById("text_example1");
var btn_code1=document.getElementById("btn_of_viewCode1");
var ip = document.getElementById("input_ex");
var btn_code2 = document.getElementById("btn_of_viewCode2");
but_left_slide.addEventListener("click",function(){
    if(change_img_slide1==0){
    anh_slide.src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg";
    dot3.style.opacity="1";
    dot2.style.opacity="0.5";
    dot1.style.opacity="0.5";
    change_img_slide1=1;
    }else if(change_img_slide1==1){
        dot3.style.opacity="0.5";
        dot2.style.opacity="1";
        dot1.style.opacity="0.5";
        anh_slide.src="https://bizflyportal.mediacdn.vn/bizflyportal/1445/2428/2021/05/14/15/50/css16209606151954.jpg";
        change_img_slide1= 2;
    }else if(change_img_slide1==2){
        dot3.style.opacity="0.5";
        dot2.style.opacity="0.5";
        dot1.style.opacity="1";
        anh_slide.src="https://huynhthaihung.com/wp-content/uploads/2019/02/html.jpg";
        change_img_slide1=0;
    }
})
but_right_slide.addEventListener("click",function(){
    if(change_img_slide2==0){
        dot3.style.opacity="0.5";
        dot2.style.opacity="1";
        dot1.style.opacity="0.5";
        anh_slide.src="https://bizflyportal.mediacdn.vn/bizflyportal/1445/2428/2021/05/14/15/50/css16209606151954.jpg";
        change_img_slide2=1;
        }else if(change_img_slide2==1){
            dot3.style.opacity="1";
            dot2.style.opacity="0.5";
            dot1.style.opacity="0.5";
            anh_slide.src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg";
            change_img_slide2= 2;
        }else if(change_img_slide2==2){
            dot3.style.opacity="0.5";
            dot2.style.opacity="0.5";
            dot1.style.opacity="1";
            anh_slide.src="https://huynhthaihung.com/wp-content/uploads/2019/02/html.jpg";
            change_img_slide2=0;
        }
})
var new_value ="";
ip.addEventListener("change",function(){
    new_value = ip.value;
    btn_code1.addEventListener("click",function(){
        text_expl1.textContent ="<p> " + new_value+ " </p>"+ " // output is:"+ new_value;
    })
})
btn_code2.addEventListener("click",function(){
    alert("Hi! i'm Javarscript, i can do this and one more than!");
})      

