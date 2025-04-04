
//즉시 실행 함수
(
    function init(){
    console.log("initialized1!");
})();

(
    function (){
    console.log("initialized2!");
})();


//즉시 실행 함수 변형 (*****숙지!!)
const func = (function(){
    function a(){
        console.log("aaaaaa");
    }
    function b(){
        console.log("bbbbbb");
    }
    return{
        funcA: a,
        funcB: b,
    }
})();

func.funcA();
func.funcB();

//p.414 문제
const result = (function(a,b){
    function init(){
        return doSum(a,b);
    }
    function doSum(a,b){
        return a + b;
    }
    return init();
})(10,20);
console.log("result : ", result);