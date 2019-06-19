/*
* @Author: Sonu Yadav
* @Date:   2019-06-08
*/
//Print array value
var fruits = ['Banana','Orange',"Grape","Mango","Jamun"];
fruits.forEach(function(item,index,array){
    console.log("ARRAY VALUE===array",array);
    console.log("ARRAY VALUE===index",index);
    console.log("ARRAY VALUE===",item);
})


//Add to the end of an Array
var newVal = fruits.push("Lichi");
console.log("ARRAY newVal===",newVal);