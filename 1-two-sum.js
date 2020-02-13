/*
1. Two Sum
https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Bonus: Return 'No solution' if there is no solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

const nums = [12,15,19,20,2,3,9,26,55,63];
const target = 670;

var twoSum = function(nums, target) {
    var map = new Map;
    for(var i=0; i<nums.length; i++){
        var complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
    return 'No solution'; //if there is no solution the control will come here and return this
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

/*
Runtime: 60 ms, faster than 74.62% of JavaScript online submissions for Two Sum.
Memory Usage: 35.1 MB, less than 23.97% of JavaScript online submissions for Two Sum.
*/