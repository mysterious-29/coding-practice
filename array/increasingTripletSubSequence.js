var increasingTriplet = function(nums) {
    let p1 = Infinity;
    let p2 = Infinity;

    if(nums.length < 3) {
        return false;
    }

    for(let i = 0; i< nums.length; i++) {
        const num = nums[i];
        if(num <= p1) {
            p1 = num;
        } else if(num <= p2) {
            p2 = num
        } else {
            return true;
        }
    }

    return false;

};