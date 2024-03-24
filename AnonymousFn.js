let x = function(){
    console.log("Hi");
}

x();

//Immediately invoked function
(
    function iif(){
        console.log("Hello");
    }
)();

(function (x) {
    console.log(x*x);
})(5);