// // các biến
// var a= 10; //number
// var b= "ehe" //string
// var c = true; //boolean
// var d = false; //boolean
// var r = null; //null
// var e //Undefined
// var w =[1,2,3,4,] //array
// var q = Symbol(4); //symboll

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
    var úi = ar % 10;
    if (úi === lớn) {
        đếm++;
    }
    if (úi > lớn ) {
        lớn = úi;
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
 var tuw = 7557;
 var hê = Math.floor(Math.log10(tuw)) + 1;
 var hu = 0;
 var hi = tuw;

 console.log(tuw , "có phải số đối xứng không?");
 for (; hi !== 0; hi = Math.floor(hi / 10)) {
    var hí = hi % 10;
    hu += hí * Math.pow(10, --hê);
 }

 if (hu === tuw) {
    console.log("đúng")
 } else {
    console.log("sai")
 }

//  bài 60 + 61

var ty = 654321;
var chck = oi = true;
var tp = de = ty;
var eh = ou = tp % 10;
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


console.log(ty , "có giảm dần từ trái sang phải?");


for (; de !== 0; de = Math.floor(de / 10)) {
    var as = de % 10;
    if (as < ou) {
        oi = false;
    }else {
        ou = as;
    }
}

if (oi ) {
    console.log("đúng");
}else {
    console.log("sai");
}

// bài 62 + 63

var a = 12;
var b = 6;
var i;
var y;

var max = a > b ? a : b;
var min = a < b ? a : b;

for (i = min; i >= 1; i--) {
    if(max % i === 0 && min % i === 0){
        console.log("ước chung lớn =", i);
        break;
    }
}

if (a === b) {
    console.log("giá trị của a là =", a);
} else {
    for (y = max; y < a * b; y++) {
        if (y % a === 0 && y % b === 0) {
            console.log("Bội chung nhỏ nhất", y);
            break;
        }
    }
}

// bài 64

var xi = 2;
var xy = 5;

var xiy = - xy / xi;
console.log("nghiệm là:", xiy)

// bài 65

var xe = 2;
var xr = -7;
var xt = 3;

var tisnh = xr * xr - 4 * xe * xt;

if (tisnh > 0) {
    var x1 = (- xr + Math.sqrt(tisnh)) / (2 * xe);
    var x2 = (- xr - Math.sqrt(tisnh)) / (2 * xe);
    console.log("Nghiệm: x1 = ", x1, ", x2 = ", x2);
}else if (tisnh === 0) {
    var zx = -xr / (2 * xe);
    console.log("Phương trình có nghiệm kép: x = ", zx);
  } else {
    console.log("Phương trình không có nghiệm thực.");
  }

// bài 67
var su = 0;
var tu = 1;
var xu = 1;
var nu = 2;

xu = - xu;  

for (var iu = 1; iu <= nu; iu++) {
    tu = tu * xu;
    su = su + tu;
}

console.log("Tổng =", -su );

// bài 68 + 69;
var tq = 1;
var sq = 0;
var xq = 6;
var nq = 4;
var iq;
var yq = 1;
var uq = 0;

for (iq = 1; iq <= nq; iq++) {
    tq = Math.pow(xq, 2 * iq) * Math.pow(-1, iq);
    sq = tq + sq;
}

for (iq = 0; iq < nq; iq++) {
    yq = Math.pow(xq, 2 * iq + 1) * Math.pow(-1, i);
    uq = uq + yq;
}

console.log("Tong la", uq);


console.log("Tổng là", sq);

// bài 70 
var st = 0;
var pt = 0;
var nt = 4;
var it;

for (it = 1; it <= nt; it++) {
    pt = pt + it;
    st = st + 1 * Math.pow(-1, 1 + it) / pt;
}

console.log("tổng là", st);

// bài 71
var sz = 0;
var tz = 1;
var mz = 0;
var iz = 1;
var nz = 4;
var xz = 3;

for (iz = 1; iz <= nz; iz++) {
    tz = tz * xz;
    mz = mz + iz;
    sz = sz + Math.pow(-1, iz) * tz / mz;
}

console.log("tổng là", sz)

// bài 72
var sc = 1;
var Nc = 1;
var ic = 1;
var xc = 2;
var nc = 4;
var tc;
var Mc;

for (ic = 1; ic <= nc; ic++) {
    tc = Math.pow(xc, 2 * ic);
  Mc = ic * 2;
  Nc = Nc * Mc * (Mc - 1);
  sc = sc + Math.pow(-1, ic) * tc / Nc;
}

console.log("tổng là", sc)

// bài 73
var np = 3;
var xp = 5;
var Sp = 1;
var Np = 1;
var ip = 1;
var Tp;
var Mp;

for (ip = 1; ip <= np; ip++) {
  Tp = Math.pow(xp, 2 * ip);
  Mp = ip * 2;
  Np = Np * Mp * (Mp - 1);
  Sp = Sp + Math.pow(-1, ip) * Tp / Np;
}

console.log("tổng là", -Sp);

// bài 74
var xm = 4;
var nm = 8;
var Sm = 1;
var Nm = 1;
var im;
var Tm;
var Mm;

for (im = 1; im <= nm; im++) {
  Tm = Math.pow(xm, 2 * im + 1);
  Mm = im * 2 + 1;
  Nm = Nm * Mm * (Mm - 1);
  Sm = Sm + Math.pow(-1, i + 1) * Tm / Nm;
}

console.log("tổng là", Sm - xm)

// bài 75

function isPower(num) {
    return (num & (num - 1)) === 0;
  }
  
  var numbe = 32;
  
  if (isPower(numbe)) {
    console.log( numbe, ' là dạng 2^k');
  } else {
    console.log( numbe, ' không là dạng 2^k');
  }

//   bài 76
function Three(num) {
    while (num !== 0 && num % 3 === 0) {
      num /= 3;
    }
    return num === 1;
  }
  
  var number = 81; 
  
  if (Three(number)) {
    console.log(number, ' là dạng 3^k');
  } else {
    console.log(number, ' không là dạng 3^k');
  }

//   bài 77
var ni = 12
var si = 0;

for (var ii = 1; ii <= ni; ii++) {
  si += ii;
}

console.log("Tong cua day S(n) la: ", si);

// bài 78
function lietKe(ny) {
    var uocSo = [];
  
    for (var iy = 1; iy <= ny; iy++) {
      if (ny % iy === 0) {
        uocSo.push(iy);
      }
    }
  
    return uocSo;
  }
  
  var ny = 14;
  var uocSo = lietKe(ny);
  
  console.log("Uoc so cua ", ny , " la: " , uocSo.join(", "));

//   bài 79
var no = 20
var dem = no.toString().length;

console.log("Số lượng chữ số của " , no , " là: " , dem);

// bài 80
function tinhTong(xe, ne) {
    var se = 0;
  
    for (var ie = 1; ie <= ne; ie++) {
      var nume = Math.pow(xe, ie);
      var deno = 0;
  
      for (var je = 1; je <= ie; je++) {
        deno += je;
      }
  
      var term = nume / deno;
      se += term;
    }
  
    return se;
  }
  
 var xe = 6
  var ne = 8
  var tong = tinhTong(xe, ne);
  
  console.log("Tổng S(n) = ", tong);

//   bài 82
function timSoLonNhat(az, bz, cz) {
    var max = az;
  
    if (bz > max) {
      max = bz;
    }
  
    if (cz > max) {
      max = cz;
    }
  
    return max;
  }
  
  var az = 4;
  var bz = 2;
  var cz = 8;
  var max = timSoLonNhat(az, bz, cz);
  
  console.log("Số lớn nhất là: ", max);

//   bài 83
function check(ap, bp) {
    if ((ap > 0 && bp > 0) || (ap < 0 && bp < 0)) {
      return true; // Trả về true nếu cùng dấu
    } else {
      return false; // Trả về false nếu khác dấu
    }
  }
  
  var ap = 34;
  var bp = 12;
  
  var cungDau = check(ap, bp);
  
  if (cungDau) {
    console.log("Hai số có cùng dấu.");
  } else {
    console.log("Hai số không có cùng dấu.");
  }

//   bài 84
function giai(av, bv) {
    if (av === 0) {
      if (bv === 0) {
        console.log("Phương trình vô số nghiệm.");
      } else {
        console.log("Phương trình vô nghiệm.");
      }
    } else {
      var xv = -bv / av;
      console.log(`Phương trình có nghiệm duy nhất x = `, xv);
    }
  }
  
  var av = 8
  var bv = 4
  
  giai(av, bv);

//   bài 85
function xacDinh(thang) {
    if (thang >= 1 && thang <= 3) {
      return 1;
    } else if (thang >= 4 && thang <= 6) {
      return 2;
    } else if (thang >= 7 && thang <= 9) {
      return 3;
    } else if (thang >= 10 && thang <= 12) {
      return 4;
    } else {
      return -1;
    }
  }
  
  var thang = 10
  
  var quy = xacDinh(thang);
  
  if (quy === -1) {
    console.log("Tháng không hợp lệ.");
  } else {
    console.log("Tháng", thang, "thuộc quý", quy, "trong năm.");
  }

  // bài 86
  function tinhTong(nu) {
    var su = (nu * (nu + 1) / 2) ** 2;
    return su;
  }
  
  var nu = 12;
  var tu = tinhTong(nu);
  
  console.log("Tổng của dãy số mũ ba từ 1 đến", nu, "là", tu);

  // bài 87

  function NhoNhat() {
    var nn = 4;
    var sn = 0;
  
    while (sn <= 10000) {
      sn += nn;
      nn++;
    }
  
    return nn;
  }
  
  var nn = NhoNhat();
  
  console.log("Số nguyên dương n nhỏ nhất sao cho 1 + 2 + ... + n > 10000 là", nn);

  // bài 88

  for (var ir = 97; ir <= 122; ir++) {
    var đếm = String.fromCharCode(ir);
    console.log(đếm);
  }

  // bài 89

  function tinhTong(Nx) {
    var sx = 0;
  
    for (var ix = 1; ix < Nx; ix += 2) {
      sx += ix;
    }
  
    return sx;
  }
  
  var Nx = 20
  var tong = tinhTong(Nx);
  
  console.log("Tổng các giá trị lẻ nguyên dương nhỏ hơn", Nx, "là", tong);

  // bài 90

  function timM(Na) {
    var sa = 0;
    var ma = 1;
  
    while (sa < Na) {
      sa += ma;
      ma++;
    }
  
    return ma - 1 ;
  }
  
  var Na = 14;
  var ma = timM(Na);
  
  console.log("Số nguyên dương m lớn nhất sao cho 1 + 2 + ... + m < ", Na, "là", ma);

  // bài 91

  for (var yt = 1; yt < 100; yt += 2) {
  console.log(yt);
}

// ài 92

function timlon(avt, bvt) {
  if (bvt === 0) {
    return avt;
  } else {
    return timlon(bvt, avt % bvt);
  }
}

var avt = 5
var bvt = 8
var uscln = timlon(avt, bvt);

console.log("Ước số chung lớn nhất của", avt, "và", bvt, "là", uscln);

// bài 93

function kiemTra(nsb) {
  if (nsb < 2) {
    return false;
  }

  for (var isb = 2; isb <= Math.sqrt(nsb); isb++) {
    if (nsb % isb === 0) {
      return false;
    }
  }

  return true;
}

var bsb = 10;
var asb = kiemTra(bsb);

if (asb) {
  console.log(bsb, "là số nguyên tố.");
} else {
  console.log(bsb, "không phải là số nguyên tố.");
}

// bài 94

for (var qe = 1; qe < 100; qe += 2) {
  if (qe !== 5 && qe !== 7 && qe !== 93) {
    console.log(qe);
  }
}

// bài 95

var acv = -12;
var bcv = -31;
var ccv = -50;

if (acv < 0) {
  acv = Math.abs(acv);
}

if (bcv < 0) {
  bcv = Math.abs(bcv);
}

if (ccv < 0) {
  ccv = Math.abs(ccv);
}

console.log("Số thực thứ nhất:", acv);
console.log("Số thực thứ hai:", bcv);
console.log("Số thực thứ ba:", ccv);

// bài 96
function bai96(xsu) {
  if (xsu >= 5) {
    return 2 * Math.pow(xsu, 2) + 5 * xsu + 9;
  } else {
    return -2 * Math.pow(xsu, 2) + 4 * xsu - 9;
  }
}

var xsu = 45;
var kq = bai96(xsu);

console.log("Giá trị của hàm số là:", kq);


// bài 97

function check(abc, bac, cad) {
  if (abc <= 0 || bac <= 0 || cad <= 0) {
    return "Không phải tam giác";
  } else if (abc + bac <= cad || abc + cad <= bac || bac + cad <= abc) {
    return "Không phải tam giác";
  } else if (abc === bac && bac === cad) {
    return "Tam giác đều";
  } else if (abc === bac || abc === cad || bac === cad) {
    return "Tam giác cân";
  } else if (abc * abc + bac * bac === cad * cad || abc * abc + cad * cad === bac * bac || bac * bac + cad * cad === abc * abc) {
    return "Tam giác vuông";
  } else {
    return "Tam giác thường";
  }
}

var abc = 3;
var bac = 4;
var cad = 3;

var loai = check(abc, bac, cad);

console.log("Đây là tam giác:", loai);

// bài 98

function giaihe(ayt, byt, cyt, dyt, eyt, fyt) {
  var gyt = ayt * eyt - byt * dyt;

  if (gyt === 0) {
    if (cyt / ayt === fyt / dyt) {
      return "Hệ phương trình có vô số nghiệm";
    } else {
      return "Hệ phương trình vô nghiệm";
    }
  } else {
    var xyt = (cyt * eyt - byt * fyt) / gyt;
    var yyt = (ayt * fyt - cyt * dyt) / gyt;
    return "Nghiệm của hệ phương trình là x = " + xyt + ", y = " + yyt;
  }
}

var ayt = 4;
var byt = 7;
var cyt = 3 ;
var dyt = 12;
var eyt = 4;
var fyt = 3;

var ketQua = giaihe(ayt, byt, cyt, dyt, eyt, fyt);

console.log(ketQua);

//bài 99
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nhập a: ', (a) => {
  rl.question('Nhập b: ', (b) => {
    rl.question('Nhập c: ', (c) => {
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);

      let temp;

      if (a > b) {
        temp = a;
        a = b;
        b = temp;
      }
      if (a > c) {
        temp = a;
        a = c;
        c = temp;
      }
      if (b > c) {
        temp = b;
        b = c;
        c = temp;
      }

      console.log('Tăng dần:', a, b, c);

      rl.close();
    });
  });
});

// 100
const input = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

input.question('Nhập a: ', (a) => {
  input.question('Nhập b: ', (b) => {
    input.question('Nhập c: ', (c) => {
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);

      if (a === 0) {
        if (b === 0) {
          if (c === 0) {
            console.log('Phương trình có vô số nghiệm');
          } else {
            console.log('Phương trình vô nghiệm');
          }
        } else {
          let x = -c / b;
          console.log('Phương trình có nghiệm duy nhất x =', x);
        }
      } else {
        let delta = b * b - 4 * a * c;

        if (delta < 0) {
          console.log('Phương trình vô nghiệm');
        } else if (delta === 0) {
          let x = -b / (2 * a);
          console.log('Phương trình có nghiệm kép x1 = x2 =', x);
        } else {
          let x1 = (-b + Math.sqrt(delta)) / (2 * a);
          let x2 = (-b - Math.sqrt(delta)) / (2 * a);
          console.log('Phương trình có 2 nghiệm phân biệt:');
          console.log('x1 =', x1);
          console.log('x2 =', x2);
        }
      }

      input.close();
    });
  });
});

// 101
const minYear = 1900;
const maxYear = 10000;

function KiemTraNamNhuan(nam) {
  return (nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0;
}

function TimSoNgayTrongThang(thang, nam) {
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log('Có 31 ngày');
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log('Có 30 ngày');
      break;
    case 2:
      let check = KiemTraNamNhuan(nam);
      if (check) {
        console.log('Có 29 ngày');
      } else {
        console.log('Có 28 ngày');
      }
      break;
    default:
      console.log('Tháng không hợp lệ');
  }
}

const inputInterface = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

inputInterface.question('Nhập vào tháng: ', (thang) => {
  thang = parseInt(thang);

  if (thang < 1 || thang > 12) {
    console.log('Dữ liệu tháng không hợp lệ. Xin kiểm tra lại!');
    inputInterface.close();
    return;
  }

  inputInterface.question('Nhập vào năm: ', (nam) => {
    nam = parseInt(nam);

    if (nam < minYear || nam > maxYear) {
      console.log('Dữ liệu năm không hợp lệ. Xin kiểm tra lại!');
      inputInterface.close();
      return;
    }

    TimSoNgayTrongThang(thang, nam);

    inputInterface.close();
  });
});

//102
const MIN_YEAR = 1900;
const MAX_YEAR = 10000;

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(month, year) {
    let daysInMonth;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            daysInMonth = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysInMonth = 30;
            break;
        case 2:
            let isLeap = isLeapYear(year);
            daysInMonth = isLeap ? 29 : 28;
            break;
    }
    return daysInMonth;
}

function getNextDate(day, month, year) {
    let daysInMonth = getDaysInMonth(month, year);
    if (day < daysInMonth) {
        day++; // Increase the day
    } else if (month < 12) {
        day = 1;
        month++; // Next day is the start of the next month
    } else {
        day = month = 1;
        year++; // Next day is the start of the new year (month = 1, day = 1)
    }
    console.log(`Ngay ke tiep la: ${day} - ${month} - ${year}`);
}

function main() {
    let day, month, year;

    do {
        year = 2022;
        if (year < MIN_YEAR || year > MAX_YEAR) {
            console.log("Du lieu nam khong hop le. Xin kiem tra lai!");
        }
    } while (year < MIN_YEAR || year > MAX_YEAR);

    do {
        month = 10;
        if (month < 1 || month > 12) {
            console.log("Du lieu thang khong hop le. Xin kiem tra lai!");
        }
    } while (month < 1 || month > 12);

    let daysInMonth = getDaysInMonth(month, year);
    do {
        day = 21;
        if (day < 1 || day > daysInMonth) {
            console.log("Du lieu ngay khong hop le. Xin kiem tra lai!");
        }
    } while (day < 1 || day > daysInMonth);

    getNextDate(day, month, year);
}

main();