/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for (var i= 0 ; i <= nums.length;i++){
        for (var j=i+1 ; j<=nums.length ;j++){
            if(nums[j] == (target - nums[i])){
                var n1 = nums.indexOf(nums[i]);
                var n2 = nums.indexOf(nums[j]);
                 if(n1 == n2){
                 return [nums.indexOf(nums[i]),nums.lastIndexOf(nums[j])];
                 }
                return [n1,n2];
            }
            
            
        }
        
    }
    
};