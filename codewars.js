//narcissistic number
function narcissistic(value) {
    let sum=0;
    let result;
    let valueArr=Array.from(value.toString(), Number);
    valueArr.forEach (function (i) {
      sum=sum+i**valueArr.length
    
    });
    
    if (value==sum) {
      result=true
    } else {
      result=false
    }
    return result
  }
  console.log (narcissistic(7));
// колличество  пассажиров из массива [[],[]]
var number = function(busStops){
   let passengers=0; 
   busStops.forEach(function (item) {
     passengers+=item[0]-item[1];
    
   });
    return passengers
}
// pangrams search
function isPangram(string){
    let pangram = new Set(string.toLowerCase().replace(/[^A-Za-z]/g,""));
    if (pangram.size==26) {
        return true
    } else {
        return false
    };
  }

// Are they the "same"?
let a = [121, 144, 19, 161, 19, 144, 19, 11]; 
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
ans=true;
function comp(array1, array2){
    array1.forEach((element) => { 
     ans&&=array2.includes(element**2)
    });
    return ans
  }
  console.log (comp(a,b));
