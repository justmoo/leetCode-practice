/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var list = [];
    for(var i=1; i <= n;i++){
        if(i % 3 == 0 && i % 5==0){
             list.push("FizzBuzz");
        }else if(i % 5 == 0){
             list.push("Buzz")
        }else if (i % 3 == 0){
             list.push("Fizz");
        }
        else{
        var num = i;
              list.push(num.toString());

        }

    }
    return list;
};
