 
 console.time("loop");
 console.log("hi I m there");
 var arr = [];
  for (var i = 0; i < 10000; i += 1) {
    arr.push(i);
    // Do nothing
  }
  console.log(arr)
  console.timeEnd("loop");