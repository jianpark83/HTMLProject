const person = {
    name: ["Hong", "Gildong"],
    age: 20,
};

console.log(person.name[0])
console.log(person.age)

//p.423
const person2 = {
    name:{
        firstName:"Gidong",
        lastName:"Hong"
    },
    likes:["apple", "samsung"],
    printHello:function(){
        return "hello";
    }
};

console.log(person2.name);
console.log(person2["name"]["firstName"]);
console.log(person2.likes);
console.log(person2["likes"])
console.log(person2["likes"][1])
console.log(person2["printHello"]())

person2.age = 20;  //추가
console.log(person2["age"]);

delete person2.age;  //삭제
console.log(person2.age)
