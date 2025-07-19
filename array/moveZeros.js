/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let ptr1 = 0;
    let ptr2 = 1;
    while(ptr2 < nums.length) {
        if(nums[ptr1] === 0 && nums[ptr2] !== 0) {
            const temp = nums[ptr2];
            nums[ptr2] = nums[ptr1];
            nums[ptr1] = temp;
            ptr1++;
            ptr2++
        } else if(nums[ptr1] === 0 && nums[ptr2] === 0) {
            ptr2++;
        } else if(nums[ptr1] !== 0 && nums[ptr2] === 0) {
            ptr2++;
            ptr1++;
        } else {
            ptr2++;
            ptr1++;
        }
    }
};

moveZeroes([ 0,0,0,0,1])