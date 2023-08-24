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



//   bài 46
var r= 1246789;
var sochu = 0;
var mng= r;

if(r === 0) {
    sochu = 1;
}

for (; mng !== 0; mng = Math.floor(mng / 10)) {
    if (mng % 2 === 1) {
        sochu = sochu + 1;
    }
}

console.log("số chữ số lẻ của", r, "là", sochu)

// bài 47
var ru = 1234567;
var chuso = 0;
var thema = ru;
var x = 0;

for (; thema !== 0; thema = Math.floor(thema / 10)) {
    if (thema % 2 === 0) {
        x = x + thema % 10;
    }
}

console.log("tổng các chữ số chẵn của", ru, "là", x)

// bài 48
var xu= 1234567;
var sochus = 0;
var theman = xu;
var p = 1;

for (; theman !== 0; theman = Math.floor(theman / 10)){
    if (theman % 2 === 1) {
        p = p * (theman % 10);
    }
}

console.log("tích các chữ số lẻ của", xu, "là", p)

// bài 49

var op = 32765;
var he = op;
var i;
for (i = he; i >= 10; i /= 10);

var roundedValue = Math.round(i);

console.log("chữ số đầu tiên là", roundedValue)

// bài 50

var v = 1345678;
var songhich = 0;

for(; v !== 0; v = Math.floor(v / 10)) {
    songhich = songhich * 10 + (v % 10);
}

console.log("số đảo ngược là", songhich);

// bài 51

var rt = 1239870;
var m = 0;

for (; rt !== 0; rt = Math.floor(rt / 10)) {
    var u = rt % 10;
    if (u > m) {
        m = u
    }
}

console.log("chứx số lớn nhất:", m);

// bài 52

var qt = 653490;
var mi = qt % 10;

for (; qt !== 0; qt = Math.floor(qt / 10)) {
    var iu = qt % 10;
    if (iu < mi) {
        mi = iu;
    }
}

console.log ("chữ số nhỏ nhất:", mi)

// bài 53

var ar = 9378943;
var lớn = 0;
var đếm = 1;

if (ar === 0) {
    đếm = 1;
}

for (; ar !== 0; ar = Math.floor(ar / 10)) {
    var ui = ar % 10;
    if (ui === lớn) {
        đếm++;
    }
    if (ui > lớn ) {
        lớn = ui;
        đếm = 1;
    }
}

console.log("số lớn nhất là", lớn,"Số lượng chữ số lớn nhất là: ", đếm);

// bài 54

var tu = 19876172;
var nhỏ = tu % 10;
var đê = 0;

if (tu === 0) {
    nhỏ = 0;
}

for (;tu !== 0; tu = Math.floor(tu / 10)) {
    var qi = tu % 10;
    if (qi === nhỏ) {
        đê++;
    }
    if(qi < nhỏ) {
        nhỏ = qi;
        đê = 1;
    }
}

console.log("số nhỏ nhất là", nhỏ, "số lượng chữ số nhỏ nhất", đê)

// bài 56

var qw = 565;
console.log(qw , "có gồm toàn số lẻ hay không?");

var kt = true;
for (; qw !== 0; qw = Math.floor(qw / 10)) {
    if ((qw % 10) % 2 === 0) {
        kt = false;
    }
}

if (kt === true) {
    console.log("đúng");
}else {
    console.log("sai");
}

// bài 57
var w = 665;
console.log(w, "gồm toàn số chẳng?");
var tr = true;

for (; w !== 0; w = Math.floor(w / 10)) {
    if ((w % 10) % 2 === 1) {
        tr = false;
    }
}

if (tr === true) {
    console.log("đúng");
}else {
    console.log("sai");
}

// bài 59
 var tu = 7557;
 var hê = Math.floor(Math.log10(tu)) + 1;
 var hu = 0;
 var hi = tu;

 console.log(tu , "có phải số đối xứng không?");
 for (; hi !== 0; hi = Math.floor(hi / 10)) {
    var hí = hi % 10;
    hu += hí * Math.pow(10, --hê);
 }

 if (hu === tu) {
    console.log("đúng")
 } else {
    console.log("sai")
 }

//  bài 60

var ty = 123456;
var chck = true;
var tp = ty;
var eh = tp % 10;
tp = Math.floor(tp / 10);

console.log(ty , "có tăng dần từ trái sang phải?");

for (; tp !== 0; tp = Math.floor(tp / 10)) {
    var n = tp % 10;
    if (eh < n) {
        chck = false;
    } else {
        eh = n;
    }
}

if (chck ) {
    console.log("đúng")
} else {
    console.log('sai')
}