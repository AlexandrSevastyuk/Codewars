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
