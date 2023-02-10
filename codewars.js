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
