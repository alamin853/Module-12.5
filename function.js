function evenify(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, "is even number");
        }
        else{
            console.log(num*2, "is odd number");
        }
    }
}
var nums = [11, 15, 17, 10, 25];
evenify(nums);


var friendsAge = [20, 21, 22, 23, 24, 50];
evenify(friendsAge);