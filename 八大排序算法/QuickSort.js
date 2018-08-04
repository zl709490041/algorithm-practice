/**
 * 快速排序
 */
function  quickSort(a,left,right) {
    if (left == right) return;
    if (left < right) {
        let key = partition(a,left,right);
        quickSort(a,left,key-1);
        quickSort(a,key+1,right);
    }
    return a;
}
function partition(a,left,right) {
    let key = a[left];
    while (left < right) {
        while (key<=a[right] && left<right) {
            right--;
        }
        [a[left],a[right]] = [a[right],a[left]];
        while(key>=a[left] && left<right) {
            left++;
        }
        [a[left],a[right]] = [a[right],a[left]];
    }
    return left; 
}
var arr = [12,1,4,5,9,3,9,2];
var left = 0,right = arr.length-1;
console.log(quickSort(arr,left,right));