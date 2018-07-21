/* 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成 */
var removeDuplicates = function(nums) {
    var index = 0;
    if (nums.length === 0){
        console.log('[]');
        return 0;
    }
    for(var i = 0;i < nums.length-1;i++) {
        if(nums[i] !== nums[i+1]) {
            nums[index++] = nums[i];
        }
    }
    nums[index] = nums[i];
    console.log(nums);
    return index+1;
};
console.log(removeDuplicates([]));