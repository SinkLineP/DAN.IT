// const data = [1, 2, 1, 2, 3];

// let newArray = data.filter(function(elem, pos) {
//     return data.indexOf(elem) == pos;
// });

// console.log(newArray);

const data = [1,2,3,4,5,6,7]

let i,j,temparray,chunk = 10;
for (i=0,j=array.length; i<j; i+=chunk) {
    temparray = array.slice(i,i+chunk);
}
  
console.log(chunk(data, 2));