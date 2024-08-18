let sym = Symbol["hey"];
let obj = {
    Name: "prachi",
    "full name": "Prachi Goyal",
    age : 19,
    [sym]: "hello"
}
// console.log(obj.Name);
// console.log(obj.age);
// console.log(obj["full name"]);
// console.log(obj[sym]);


obj.funct = function() {
    console.log("how you doing ? ")
}
// obj.funct()





//Singleton


//api
const course = {
    coursename : "JS in hindi",
    price : "999",
    courseinstructor: "hitesh"
}

// console.log(course.price);
const {price} = course;
console.log(price);
// JSON
// {
//     "coursename" : "JS in hindi",
//     "price" : "999",
//     "courseinstructor": "hitesh"
// }