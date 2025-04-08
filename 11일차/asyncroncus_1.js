//동기방식

console.log("=========동기방식=========")  //순서대로.. 과연 합리적인가?
console.log("1. 라면 장보기")
console.log("2. 물 끓이기")
console.log("3. 끊는 물에 라면, 스프 넣고 익히기")
console.log("4. 완성")
console.log("")
//비동기 방식 => 병렬로 처리, 동시처리

console.log("=========비동기방식=========")

setTimeout(()=>{                  //콜백함수
    console.log("1. 라면 장보기")
},3000); //3초 후에

console.log("2. 물 끓이기")
console.log("3. 끊는 물에 라면, 스프 넣고 익히기")
console.log("4. 완성")

console.log("-----------------------------------")