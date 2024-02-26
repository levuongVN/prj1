//133245
/* arr.length & arr.push()
const arr=[25, 154, 461, 67, 32, 43];
var lenght = arr.length;
console.log(lenght);
var push= arr.push(lenght);
*/

/* Arr concat()
Phuong thuc nay ket hop nhieu mang lai voi nhau va tra ve mot mang moi
var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
vd: var arr1=[1,2,3]
    var arr2=[4,5,6]
    var new_array = arr1.concat(arr2);
    console.log(new_array)
*/

/* Arr.every()
No se kiem tra cac thanh phan ben trong xem co hop le hay khong va tra ve ket qua true va false
Cu phap : arr.every(callback(element[, index[, array]])[, thisArg])
vd: function check_chiacho2(a){
 return (a%2===0)
}
var arr=[2,4,5];
console.log(arr.every(check_chiacho2))// false
*/

/* Arr.some()
No se kiem tra trong mang, chi can mot trong nhung phan tu trong mang ma hop le, no se tra ve true va nguoc lai
Vd: function check_lonhon10(a){
  return a>10;
 }
 var so =[1,2,11]
 var kiemtra = so.some(check_lonhon10);
 console.log(kiemtra);// true
 */

 /* Array.filter() 
No se kiem tra tat ca phan tu trong mang va loc ra nhung phan tu hop le 
vd: 
function check$so$duong(a){
  return a>0;
}
var arr=[-1,-5,6,10];
var check_var= arr.filter(check$so$duong);
console.log(check_var) => tra ve 6 va 10
 */

/* Array.find()& Array.findIndex()
Array.find() se tra ve gia tri dau tien trong mang khi phan tu do thoa man dieu kien
vd: 
function check$so$chia$het$cho$3(a){
  return (a%3===0) Day la dieu kien 
}
var arr = [3,5,9]
var check = arr.find(check$so$chia$het$cho$3);
console.log(check) tra ve 3

Array.findIndex()
No se tra ve CHỈ SỐ của phan tu khong thoa man dieu kien o vi tri 
dau tien trong cac gia tri cua mang, neu ko co phan tu nao thoa man no se tra ve "-1".

vd:
function check(element){
  return element>10
}
var array1 = [5, 12, 8, 130, 44];

var found = array1.findIndex(check)
console.log(found) Trả về 1
 */

/* Array.forEach()
Nó có thể thay thế vòng for trong chuyện duyệt mảng và thực hiện hành động lên từng phần tử trong mảng
vd:
function duyet_mang(a){
  console.log(a);
}
var a =[1,2,3];
var b = a.forEach(duyet_mang)
console.log(b)// Tra ve 1 2 va 3
Hoặc có cách viết khác:
+) index là chỉ số phần tử đang được xử lý
+) a là giá trị phần tử hiện tại đang đc xử lý
var arr=[3,4,5];
function duyet_mang(a,index){
  console.log('a[' + index + '] = ' + a);
}
arr.forEach(duyet_mang) logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
*/

/*Array.includes()
 Array.includes()
 Phương thức include() xác định xem một mảng có bao gồm một giá trị nhất định trong số 
 các mục nhập của nó hay không, trả về true hoặc false khi thích hợp.
 vd: 
var pets =['cat', 'dog']
var check = pets.includes('cat', 0) Kiểm tra mảng từ vị trí 0
console.log(check) output: True
*/

/*Array.indexOf() và Array.lastIndexOf()
Trả về vị trí của phần tử mà nó tìm được (indexOf)
Trả về vị trí cuối cùng mà phần tử đó tìm được (lastIndexOf)
Nếu không tìm thấy nó sẽ trả về -1
vd: 
var mang =[2,4,3];
var tim = mang.indexOf(4)
console.log(tim) Trả về là "1"
var mang2 =[1,4,5,4];
var tim_tiep=mang2.lastIndexOf(4)
console.log(tim_tiep) Trả về là "3"
*/

/* arr.join()
Array.join()
Phương thức join() tạo và trả về một chuỗi mới bằng cách nối tất cả các phần tử trong một mảng (hoặc một đối tượng giống như mảng)
var a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
 */

/* arr.map()
 Array.map() 
 Phương thức map() tạo ra một mảng mới với kết quả gọi một hàm được cung cấp trên mọi phần tử trong mảng gọi.
 vd:
 function check_gia_tri$tuyet$doi(a){
  return Math.abs(a);
}
var arr=[2,-1,-3];
var check = arr.map(check_gia_tri$tuyet$doi)
console.log(check)
 */

/* Array.shift(), Array.unshift(), Array.pop() and Array.push()
Phương thức shift() xóa phần tử đầu tiên của mảng và trả về phần tử bị xóa này. Phương thức này sẽ thay đổi độ dài của mảng.

Phương thức unshift() thêm một hoặc nhiều phần tử vào vị trí đầu mảng sau đó trả về chiều dài của mảng mới.

Phường thức pop() xóa đi phần tử cuối cùng của mảng và trả về phần tử này. Phương thức này sẽ thay đổi chiều dài của mảng.

Phương thức push() thêm 1 hay nhiều phần tử vào cuối mảng và trả về độ dài của mảng mới.
vd:
var arr$1=['A','B','C']
arr$1.shift() output: ['B','C']
arr$1.pop()   output: ['A','B']
arr$1.push('D') output: ['A','B','C','D']
console.log(arr$1) Vì đang code các phương thức kia nên sẽ trả về ['B','D']
*/

/* reverse
Array.reverse()
Nó sẽ trả về một mảng bị đảo ngược
vd:
var arr=[1,2,3];
arr.reverse()
console.log(arr)
*/
/* sort cho arr
Array.sort()
Trả về một mảng đã được sắp xếp, có thể dùng các kiểu sắp xếp khác như bbsort hay v.v
vd:
function check(a,b){
  return a-b;
}
var a=[1,5,3,6];
var b= a.sort(check);
console.log(b)
*/

/* CHUỖI
Chuỗi (String) 
Chuỗi bao gồm 2 thuộc tính đó là "lenght" và "prototype"
* lenght trả về độ dài của chuỗi 
* prototype Cho phép thêm các thuộc tính hay phương thức
vd:
function check_do_dai(a){
  a="Js";
  var $check_length = a.length;
  if($check_length>10){
    console.log( true)
  }else{
    console.log( false)
  }
}
check_do_dai()// Nhớ là gọi hàm thì hàm sẽ hoạt động
 */

/* includes
Các phương thức của chuỗi:
includes('bla bla...') 
Nó sẽ kiểm tra chuỗi có các kí tự như trong ngoặc kia không và trả về true hoặc false
vd:
var a="Javascript";
var b = a.includes('Java');
console.log(b); out: true
 */

/*charAt, slice, toUpperCase, concat
Hiểu hơn về các phương thức charAt, slice, toUpperCase, concat
Phương thức charAt() trả về 1 ký tự của chuỗi ở vị trí được chỉ định
Phương thức slice() trích xuất một phần của chuỗi và trả về nó dưới dạng một chuỗi mới
Phương thức toUpperCase() trả về giá trị chuỗi được chuyển đổi thành chữ hoa 
Phương thức concat() nối các đối số chuỗi với chuỗi được gọi và trả về một chuỗi mới.
vd:
var a="this is Text";
var tach_ki$tu = a.charAt(0); // Lay ki tu "t"
var tach_chuoi = a.slice(1) // output: "his is Text"
var to$UpperCase = tach_ki$tu.toUpperCase(0); // In hoa ki tu "t -> T"
var result = to$UpperCase.concat(tach_chuoi) // Noi hai chuoi lai vao nhau
console.log(result) //output: "This is Text"
 */

/* split
phương thức split
Phương thức split() biến một Chuỗi thành một mảng các chuỗi, bằng cách tách chuỗi theo 1 chuỗi đã chỉ định.
vd:
var a ='this is text'
function in_hoa$chu_dau(a){
 return ( a[0].toUpperCase()+ a.slice(1));// in hoa chữ đầu và cộng với các kí tự còn lại của chuỗi
}
function ham(str){
  var arr = str.split(' ');// Tách thành mảng
  var duyet_mang = arr.map(in_hoa$chu_dau)// Duyệt mảng và in hoa các chữ cái đầu của từng phần tử,
   dùng map khi hàm có sự trả về(return)
  console.log(duyet_mang.join(' '))// Kết hợp các phần tử và in ra "This Is Text"
}
ham(a)
 */

/* phương thức replace() và trim() 
Phương thức trim() xóa bỏ khoảng trắng ở đầu vào cuối chuỗi
vd: 
var greeting = '   Hello world!   ';
console.log(greeting); returns "   Hello world!   ";
console.log(greeting.trim()); returns "Hello world!";
Còn có trimLeft() và trimRight(), nó sẽ xoá bỏ khoảng trắng ở bên trái hoặc bên phải
vd: var greeting='   Hello Guys   '
console.log(greeting.trimLeft()); Returns "Hello Guys   "
console.log(greeting.trimRight()); Returns "   Hello Guys"

Phương thức replace() trả về một chuỗi mới với một số hoặc tất cả các kết quả khớp của mẫu được thay thế bằng một chuỗi thay thế khác.
vd:
var greeting = 'Hello bro, i am fuck boy and i like your mother =))';
var replaceExamples= greeting.replace('fuck boy', 'friendly');
console.log(replaceExamples); Returns "Hello bro, i am friendly and i like your mother =))"
Nếu muốn thay đổi nhiều hơn 1 kí tự có thể dùng cách sau:
	var str ='  javascript is cool'
  var reget = /a/gi; Cái này là thay đổi tất cả kí tự 'a'
  var reget$2=/e/gi; Cái này thay đổi tất cả kí tự 'e'
  var reget$3=/i/gi; Cái này tương tự...
  var reget$4 =/o/gi;
  var reget$5=/s/gi
  var ma_hoa =str.replace(reget, '4')
  ma_hoa = ma_hoa.replace(reget$2,'3')
  ma_hoa=ma_hoa.replace(reget$3,'1')
  ma_hoa=ma_hoa.replace(reget$4,'0')
  ma_hoa=ma_hoa.replace(reget$5,'5')
    console.log(ma_hoa) Returns  '   j4v45cr1pt 15 c00l'
*/

/* Date()
Cách để tạo một datetime trong js
Một số phương thức:
 new Date();
 Nó sẽ trả về date hiện tại theo giờ địa phương
 vd: 
 var date = new Date();
 console.log(date);// Giờ hiện tại
 Còn có kiểu lấy ngày và giờ hay năm hiện tại:

const year = now.getFullYear();
const month = now.getMonth(); // 0 (January) to 11 (December)
const day = now.getDate();

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
 */

/* math()
Làm việc với kiểu number. Nó được tích hợp để tính toán, ví dụ tính giá trị tuyệt đối của một số hay v.v
*/

/* Math.max() và Math.min();
Math.max() sẽ trả về các số lớn nhất đã cho và Math.min() thì trả về số bé nhất
vd:
var a,b,c,d;
a=10;b=5;c=2;d=11;
var result = Math.max(a,b,c,d);
var result_min=Math.min(a,b,c,d);
console.log("Max: "+ result +'\n'+ 'Min: '+ result_min)// Max =11; Min =2;
*/

/* Math.sqrt()
sẽ trả về kq là căn bậc hai của số đó;
vd: 
var a =4;
function check(a){
for(var i=0;i<a;i++){
  if(Math.sqrt(a)===i){// sqrt(4)= 2; Nếu bằng i thì sẽ trả về true, ví dụ i tiến tới 2 và nó bằng căn bậc 2 của 4 => true;
    return true;
    }
  }
  return false;// Nếu không còn số nào thoả mãn căn bậc hai của số thì sẽ trả về false;
}
 */

/*Math.pow()
Sẽ trả về kết quả của phép tính bình phương
vd:
var a,b;
a=5;b=5;
var bp = Math.pow(a,2)// 2 là số mũ
var bp2 = Math.pow(b,2)
console.log(bp+bp2)
*/

/* Phương thức number
Là một đối tượng bao bọc cho phép bạn làm việc với các giá trị số.
vd:
var a=15;
var check =Number.isInteger(a);
console.log(check)// output: true;
 */

/*toFixed()
Chuyển đổi số về dạng chuỗi, giữ lại chữ số thập phân do người dùng xác định
vd:
var a=1.510;
var check=a.toFixed(1)
console.log(check) // output: 1.5
*/

/* LAST LEASSON: Number.isFinite() Number.isInteger(), Number.parseFloat() and Number.parseInt()
Number.isFinite Sẽ xác định xem số truyền vào có phải số hữu hạn hay khong
vd: Number.isFinite(2456);  // true
Number.isInteger Sẽ xác định số truyền vào có phải số nguyên hay không
vd:Number.isInteger(0.1);  // false
Number.parseFloat() Sẽ xác định một chuỗi và trả về số phẩy động
vd: Number.parseFloat('10') //10
Number.parseInt() Đổi từ 1 chuỗi về dạng số nguyên
vd: Number.parseInt('36 is my age') //36 Nó linh hoạt trong việc tách số và trả về tuy nhiên số phải nằm ở đầu chuỗi
 */

/* oninput Là phương thức khi người dùng thay đổi dữ liệu đầu vào thì js sẽ cập nhật lại dữ liệu
 */
