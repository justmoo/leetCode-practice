/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var newString = [];
  var Stringx ="";
  var string = x.toString().split("");
    for (var i = string.length-1; i >= 0 ; i--) {
    (string[i]=="-")? newString.unshift(string[i]):newString.push(string[i])}
    newString.forEach((i)=>Stringx +=i)
   return (Stringx > 0x7FFFFFFF)?  0 : Stringx < -0x7FFFFFFF? 0: Stringx
    };
