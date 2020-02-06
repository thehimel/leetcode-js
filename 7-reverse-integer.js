/*
7. Reverse Integer
https://leetcode.com/problems/reverse-integer/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within
the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem,
assume that your function returns 0 when the reversed integer overflows.
*/

var reverse = function(x) {
    var num=0;
    while(x!=0){
        num = num * 10 + x%10;
        x=parseInt(x/10);   //if parseInt() is not used, it will store the float value.
    }

    //if num is not an integer, return 0. the range of an integer is from -2^31 to 2^31-1
    if(num < -(2**31) || num > 2**31 - 1){
        return 0;
    }else{
        return num;
    }
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1534236469));   //in this case num > 2**31 - 1

/*
Runtime: 76 ms, faster than 70.11% of JavaScript online submissions for Reverse Integer.
Memory Usage: 35.9 MB, less than 52.08% of JavaScript online submissions for Reverse Integer.
*/