/*
콜백함수!!
*/

//함수, 익명함수, 람다함수, 즉시실행함수, 콜백함수

(function(){                     //즉시실행함수
    console.log("------------");
})();


function parentFunc(callback){
    console.log("parent");
    callback();    //함수호출 (매개변수 인자값을 함수에 전달)
}

function childFunc(){
    console.log("child");
}
parentFunc(childFunc);

//콜백함수 사용하는 이유!!

function repeat(count){
    for(let i=0; i<count; i++){
        console.log(i+1);
    }    
}
repeat(5);
console.log("-------------");

function repeatDouble(count){
    for(let i=0; i<count; i++){
        console.log((i+1)*2);
    }    
}
repeatDouble(5);
console.log("-------------");

function repeatThree(count){
    for(let i=0; i<count; i++){
        console.log((i+1)*3);
    }    
}
repeatThree(5);
console.log("=================");

function repeatAll(count, callback){
    for(let i=0; i<count; i++)
        callback(i+1);
}

function origin(count){
    console.log(count)
}
//repeatAll(5, origin);
repeatAll(5, count => console.log(count))  //람다함수를 바로 대입하여 축약할 수 있다
console.log("-------------");

function double(count){
    console.log(count*2)
}
//repeatAll(5, double);
repeatAll(5, count => console.log(count*2));
console.log("-------------");

function three(count){
    console.log(count*3)
}
//repeatAll(5, three);
repeatAll(5, count => console.log(count*3));


console.log("=================");
repeatAll(5, function three(count){    //함수식 전체 대입도 가능
    console.log(count*10)
});