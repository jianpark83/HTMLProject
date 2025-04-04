const email = "test@naver.com";

console.log(email.indexOf("@"));

//p.439 날짜와 시간을 다루는 date 객체
let today = new Date();
console.log(today);

//월(+1)
let nowMonth = today.getMonth();
console.log(nowMonth+1)

//일
let nowData = today.getDate();
console.log(nowData)

let 요일 = today.getDay();
console.log(요일);

let old =  new Date('2025-3-30');
let 월 = old.getMonth();
console.log(월+1);

let 일 = old.getDate();
console.log(일);

let 요일1 = old.getDay();
console.log(요일1);
