// Hello world
    console.log('Hello World');
/* ----------------------------------------Variables, Constant and usage----------------------------------------*/
    // Các biến dùng để lưu trữ dữ liệu
    // Có 3 cách khai báo biến trong JS: var, let, const


    // 1. var     
        // có thể re-declare;
        // có thể re-assign;
        // Cách khai báo 1 biến:
    console.log("--------------------VAR--------------------");
        // cộng 2 số
        var x = 10;
        var y = 14;
        var z = y - x;          
        console.log("x=" + x +"\ny=" +y + "\n --> Kết quả: z = y - x = " +z +"\n");

        // cộng 2 chuỗi
        var x1 = "Thứ 6";
        var x2 = " trời không mưa";
        var x3 = x1 + x2;       
        console.log("x1= " + x1 +"\nx2=" +x2 + "\n --> Kết quả: x3 =x1 + x2 = " +x3 +"\n");

        //cộng chuỗi và số
        var y1 = "Hôm nay là thứ "
        var y2 = 6; 
        var y3 = y1 + y2;       
        console.log("y1= " + y1 +"\ny2= " +y2 + "\n --> Kết quả: y3 = y1 + y2 = " +y3);

        console.log("** Giá trị của biến var có thể được khai báo lại");
        var y3 = y2 + y1; 
        console.log(" --> Kết quả: y3 = y2 + y1 = " + y3);

    
    // 2. let
        // không thể re-declare;
        // có thể re-assign;
        // có thể re-declare trong block scope và chỉ có hiệu lực trong block scope;
    console.log("--------------------LET--------------------");
        // cộng 2 số
        let a = 1999;
        let b = 1989;
        let c = a - b;          
        console.log("a = " + a +"\nb = " +b + "\nc = a - b = " +c +"\n");
        
        // cộng 2 chuỗi
        let a1 = "Hôm nay ăn gì?";
        let a2 = "Ăn gì cũng được";
        let a3 = a1 + a2;       
        console.log("a1 = " + a1 +"\na2 = " +a2 + "\na3 = a1 + a2 = " +a3 +"\n");

        //cộng chuỗi và số
        let b1 = "Ngày mai là thứ ";
        let b2 = 7;
        let b3 = b1+b2;         
        console.log("b1 = " + b1 +"\nb2 = " +b2 + "\nb3 = b1 + b2 = " +b3 +"\n");
        
        // có thể re-assign
        b3= b1+b2+b2;
        console.log("b1 = " + b1 +"\nb2 = " +b2 + "\nb3 = b1 + b2 = " +b3 +"\n");

        // có thể re-declare trong block scope và chỉ có hiệu lực trong block scope;
        console.log("** Giá trị của biến let không được khai báo lại, nếu muốn khai báo thì phải đặt trong {} và chỉ có tác dụng ở trong {} (Block Scope) ");
        {
            let b3 = b2 + b1; 
            console.log(" --> Kết quả (trong Block scope): b3 = b2 + b1 = " + b3);
        }
        console.log(" --> Kết quả (ngoài Block scope): b3 = b1 + b2 = " + b3);
    

    // 3.const
        // cách sử dụng: 
        // không thể re-declare
        // không thể re-assign
        // bắt buộc phải được gán giá trị khi khai báo
        // có thể re-declare trong block scope và chỉ có hiệu lực trong block scope;
    console.log("--------------------CONST--------------------");

        const l = 1999;
        const m = 1989;
        const k = l - m;          
        console.log("l = " + l +"\nm = " +m + "\nk = l - m = " +k +"\n");
        
        const PI = 3.141592653589793; 
        console.log("PI = "+PI);
        
        // có thể re-declare trong block scope và chỉ có hiệu lực trong block scope;
        {
            const PI = 25252; 
            console.log("PI = "+PI);
        }

        // Sử dụng khi khai báo: array, object
        
        // Array:
        // có thể thay đổi phần tử của constant array
        // không thể gán lại giá trị mới cho 1 constant array
        const pets = ["cat", "dog", "fish"];
        // pets = ["cat", "dog", "fish","shark"] không thể làm như vậy
        pets[0] = "bird";
        pets.push("snake");
        console.log("my pet: "+pets);

        // object 
        // có thể thay đổi thuộc tính của 1 constant object
        // không thể gán giá trị cho 1 constant object
        const pet = {name:"Jack", color:"black", size:"big"};
        // pet = {name:"Jack", color:"black", size:"big", type:"France"} không thể làm như vậy
        pet.color = "yellow";
        pet.type = "USA";
        console.log("my cat's name is: "+pet.name);

/* ----------------------------------------Working with String----------------------------------------*/
// JS String là dùng cho việc lưu trữ và thao tác với text
let t1 = "Hello";
let t2 = "'Hello'";
let t3 = '"Hello"'; // "": double quotes ; '':  single quotes
console.log("t1: "+t1+"\nt2: "+t2+"\nt3: " + t3 + "\n");

// string length
let length = t1.length;
console.log("string length of t1: "+length+"\n");

// Escape Character
let t4 = "Xin chào \'Việt Nam\' ";console.log("t4: "+t4+"\n"); // dấu ''
let t5 = "Xin chào \"Việt Nam\" ";console.log("t5: "+t5+"\n"); // dấu ""
let t6 = "Xin chào Việt Nam\b ";console.log("t6: "+t6+"\n"); // xóa 1 ký tự
let t7 = "Xin chào Việt Nam\f ";console.log("t7: "+t7+"\n");// ký hiệu female
let t8 = "Xin chào Việt Nam\n ";console.log("t8: "+t8+"\n"); // xuống dòng
//let t9 = "Xin \rchào Việt\r Nam ";console.log("t9: "+t9+"\n"); // đảo từ lên đầu
let t10 = "Xin chào Việt \t Nam ";console.log("t10: "+t10+"\n");// dấu tab
let t11 = "Xin chào Việt Nam\v ";console.log("t11: "+t11+"\n");//ký hiệu female

/* ----------------------------------------Working with Array----------------------------------------*/
const traicay = new Array(4)
traicay[0] = 'xoai'
traicay[1] = 'tao'
traicay[2] = 'man'
traicay[3] = 'cam'
console.log(traicay)
/* ----------------------------------------Working with If...Else----------------------------------------*/
const num = 30;
if(num == 30){
    console.log('Hôm nay trời không mưa')
}else{
    console.log('Hôm nay trời mưa')
}
/* ----------------------------------------Working with For Loop----------------------------------------*/
const xehoi = ['bmw','honda','kia','audi']
for(let index = 0; index < xehoi.length; index++){
    console.log(xehoi[index])
}
/* ----------------------------------------Working with Function----------------------------------------*/
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  }
  
console.log(factorial(3))
/* ----------------------------------------Object Literals and JSON----------------------------------------*/
//Object
    a = 1;
    b = 2;
    c = 3;

let obj = { a, b, c };

console.log(obj); // { "a" : 1, "b" : 2, "c" : 3 }

//JSON
console.log(JSON.parse("123"));
console.log(JSON.stringify("Canh"));
/* ----------------------------------------Class and Constructor----------------------------------------*/
class Car {
    constructor(brand,year){
        this.brand = brand;
        this.year = year; 
    }
    showInfo = () =>{
        console.log(`This car is ${this.brand} - ${this.year}`);
    }
};

class Owner extends Car {
    constructor(brand,year,name){
        super(brand,year);
        this.name = name;
    }
    getInfo = () =>{
        console.log(`${this.name} owned this car, it is ${this.brand} - ${this.year}`);
    }
} 

const quan = new Owner('BMW','I8','Canh')
quan.showInfo();
quan.getInfo();
/* ----------------------------------------Basic Async/ Await----------------------------------------*/
const PromiseTest = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(1)
    },4000);
})  


let printnumb = async ()=>{
    let num1 = await PromiseTest;
    console.log(num1);
    setTimeout(()=>{
        console.log(2);
    },3000)
    console.log(3);
}

printnumb();



