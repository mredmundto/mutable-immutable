var str = "Hello";
var str2 = str;
//What is str2?
//console.log(str2);

str.concat(" World"); // concat doesnt change the input, if we want to change, do str = str.concat
// What is str?
//console.log(str);
// What is str2
//console.log(str2);

str = str.concat(" World");
//What is str2?
//console.log(str2);

var arr = [1,2,3,4,5];
var anotherArray = arr;
arr.push(6);
//What is arr?
//console.log(arr)
//What is anotherArray?
//console.log(anotherArray) // [1,2,3,4,5,6]

arr = [1,2,3,4,5,6,7];
// What is anotherArray?
//console.log(anotherArray) // [1,2,3,4,5,6] not 7 

var addOne = function(numOrArray) {
  if(Array.isArray(numOrArray)) {
    numOrArray.push(1);
    return numOrArray;
  } else {
    numOrArray++;
    return numOrArray;
  }
};

var num = 5;
var array = [1,2,3];
addOne(num);
addOne(array);
//console.log(num); // if we want to change, then num = addOne(num)
//console.log(array);