//콜백함수(callback) - 비동기

function getData(callback){
    setTimeout(() => callback('콜백으로 처리한 데이터'),1000);  //1초 후에
}

getData((result) => console.log(result));
console.log("두번째 문장.........");      //먼저 실행된다