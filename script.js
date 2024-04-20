//First lesson Js//

/*Hi
JS*/

//Змінні//

/*let a = 10;
console.log(a);
a = 20;
console.log(a);*/

/*const b = 15;
console.log(b);*/


//Типи//

/*console.log(typeof 3);
console.log(typeof "str");
console.log(typeof true);*/


/*Boolean;

let nameFieldChecked = true;
let ageFieldChecked = false;*/


/*let a;
console.log(a);*/


//Число//

/*console.log(1 + 2);

const value = "3";
console.log(Number(value));
console.log(typeof Number(value));*/


//Перевірка на число//

/*let a = 30;
console.log(a);

const number = Number("51")
console.log(Number.isNaN(number));

const string = Number("hjhkj");
console.log(Number.isNaN(string));*/

//console.log(Number.parseFloat("3kdml"));//

/*console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2);
console.log((0.1 * 10 + 0.2 * 10) / 10 );

console.log(6 + 12);*/

//Math//

/*console.log(Math.floor(1.7));
console.log(Math.ceil(1.2));

console.log(Math.round(1.2));
console.log(Math.round(1.5));

console.log(Math.max(20, 10, 50, 90, 38));
console.log(Math.min(10, 19,87,77,1));

console.log(Math.pow(2, 4));

console.log(Math.random());*/

//String//


/*let str = "Привіт";
let str2 = "js";
let name = "Оля";
let Hello = `Привіт ${name}`;
console.log(Hello);*/

/*const message = "JavaScript " + "is " + "awesome";
console.log(message);*/

//Конкатенaція//

/*let result;

result = 5 + "5";
console.log(result);
console.log(typeof result);

result = 5 + "5" + 5;
console.log(result);
console.log(typeof result);

result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);*/

//методи строк//

/*const js = "Java Script";
console.log(typeof js);

const message = "Welcome to Bali";
console.log(message.length);

console.log("jhiuhoijpop".length);

console.log(message.toLowerCase());
console.log(message.toUpperCase());

console.log(message.indexOf("t"));
console.log(message.indexOf("p"));*/

//BigInt//

/*const num = 78591058751938n;
console.log(typeof num);*/



//Об'єкти//

/*let user = {
    name: "Daria",
    age: "17",
    work: "true",
}

console.log(user.name);*/

//Методи//

/*let user = {
    name: "Daria",
    age: "17",
    "likes birds": true,
}
console.log(user["likes birds"]);*/

/*let user = {}
user.name = "Niko";
user.age = 45;
console.log(user);*/


//Цикл for..in//

/*let user = {
    name: "Daria",
    age: "17",
    isAdmin: true,
};

for (let key in user) {

console.log(key);

console.log(user[key]);
}*/


//Впорядкування властивостей об'єкта//

/*let codes = {
    49: "Німеччина",
    41: "Швейцарія",
    44: "Великобританія",
    1: "США",
};

for (let code in codes) {

console.log(code);

}*/


/*-let user = {
    name : "Dasha",
    "Awesome" : true,
    surname: "Hreb",
};

user.age = 25;
console.log(user);*/

//Homework//


/*let name = "Ivan";
let city = "Kyiv";
city = name;
console.log(city);*/



//Repiting//

/*let name = "Dasha";
let city = "Kyiv";
city = name;
console.log(city);*/

/*let a = 5;
console.log(typeof a);

let b = "13cvb";
console.log(typeof b);


let c = "12.9jgigl";
console.log(typeof b);*/


/*console.log((0.1 * 10 + 0.2 * 10) / 10);*/

//console.log(Math.max(20, 10, 50, 40));//

/*const message = "Hello Daria"
console.log((message.length));*/

/*let user = {
    name: "Dasha",
    age : "20",
    city : "Kyiv",
    "likes flowers": true,
};

delete user.city;
console.log(user);

for (key in user) {
console.log(key);
console.log(user[key]);
};*/
