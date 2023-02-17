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

// Are they the "same?
//
function comp(array1, array2){
         if (Array.isArray(array1)&&Array.isArray(array2)) {
       let ans=true;
                                                          
     array1.forEach((element) => { 
      ans&&=array2.includes(element**2);
      array2.splice(array2.indexOf((element**2)),1)
      console.log (array2)
     });
   
     return ans} else {
       return false
     }
   }

//BigINt

function res(a, b, result, carry, base) {
    if(a.length == 0 && b.length == 0 && !carry) {
     if (result[0]=='0') {
        return result.substring(1);} else {
            return result;
        }
    }
    var left = parseInt(a.pop() || '0', 10);
    var right = parseInt(b.pop() || '0', 10);
  
    
    var l = left + right + (carry || 0);
   
    return res(a, b, l % base + (result || ""), Math.floor(l/base), base);
  }
  
 function add(a, b) {
    return res(a.split(""), b.split(""), "","",10).toString();}
