/*
구조분해 할당
*/

let arr = [1,2,3];
let one = arr[0]
let two = arr[1]
let three = arr[2]
console.log(one, two, three);

arr = [10,20,30];
[one, two, three] = arr;
console.log(one, two, three); //구조분해 할당

const func = ({name,age,location})=>{
    console.log(name,age,location);
}

let person = {
    name : "홍길동",
    age : 27,
    location : "천호"
};
//func(person.name, person.age, person.location);
func(person); //구조분해 할당, 변수명 같아야 함(name,age,location)