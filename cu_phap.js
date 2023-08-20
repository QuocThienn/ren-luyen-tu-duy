// các biến
var a= 10; //number
var b= "ehe" //string
var c = true; //boolean
var d = false; //boolean
var r = null; //null
var e //Undefined
var w =[1,2,3,4,] //array
var q = Symbol(4); //symboll

// câu điều kiện
var age =18
if(age>= 18) {
    console.log("ra đường ngủ")
}
// if

var tre= false
if(tre===true){
    console.log("còn non")
}else {
    console.log("lớn rồi")
}

var ko;
if(ko=== undefined) {
    console.log("seen không rep")
}else {
    console.log("ehe")
}

var t ="";
if(t=== "thien") {
    console.log("đúng tên")
}else if(t=== "") {
    console.log("tên rỗng")
}else {
    console.log("tên lạ")
}



// bài 42
function bai42(n) {
var s=0
for (var k=0; k < n; k++) {
     s += k;
}

console.log("Giá trị k lớn nhất để S(k) = 1 + 2 + ... + k < n là:" + s);
console.log("giá trị k lớn nhất" + (n - 1));
}


// bài 43

var nu = 100;

var sochuso= 0;
var themang= nu;

if (nu === 0) {
    sochuso = 1;
}

while (themang !== 0) {
    sochuso += 1;
    themang = Math.floor(themang / 10);
}

console.log("So chu so cua", nu , "là" , + sochuso);

// bài 44

var x = 1234567;

var s = 0;
var mang= x;
for (;mang !== 0; mang = Math.floor(mang / 10)) {
    s = s + mang % 10;
}
// while(mang !== 0) {
//     s += mang % 10;
//     mang = Math.floor(mang / 10);
// }

console.log("Tong la", + s);

// bài 45
 
var na = 224;
var p = 1;
var the = na;

while (the !== 0) {
    p *= the % 10;
    the = Math.floor(the / 10);
  }

  console.log("Tich la", p);