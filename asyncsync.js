var x = function(){ setTimeout(
    function(){
        console.log("i m timeout 1000")
        y();
    },1000
)}

var y = function(){ setTimeout(
    function(){
        console.log("i m timeout 500")
        z();
    },500
)}

var z = function(){ setTimeout(
    function(){
        console.log("i m timeout 100")
    },100
)}
console.time("loop");
x()
console.timeEnd("loop");
