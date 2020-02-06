//1. Two Sum: https://leetcode.com/problems/two-sum/

const nums = [12,15,19,20,2,3,9,26,55,63];
const target = 67;

var twoSum = function(nums, target) {
    var map = new Map;
    for(var i=0; i<nums.length; i++){
        var complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
};

console.log(twoSum(nums, target));

/*
One-pass Hash Table
While we iterate and inserting elements into the table, we also look back to check
if current element's complement already exists in the table.
If it exists, we have found a solution and return immediately.

Complexity Analysis:
Time complexity : O(n). We traverse the list containing n elements only once.
Each look up in the table costs only O(1) time.

Space complexity : O(n). The extra space required depends on the number of items stored in the hash table,
which stores at most n elements.
*/