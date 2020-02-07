/*
9. Palindrome Number
https://leetcode.com/problems/palindrome-number/

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

var isPalindrome = function(x) {
    var temp = x;
    var num = 0;
    if (temp < 0){
        return false;
    }
    while(temp>0){
        num = num*10 + temp%10;
        temp=parseInt(temp/10);
    }
    return num === x ? true : false;
};

console.log(isPalindrome(-121));

/*
Runtime: 180 ms, faster than 88.11% of JavaScript online submissions for Palindrome Number.
Memory Usage: 45 MB, less than 89.65% of JavaScript online submissions for Palindrome Number.
*/