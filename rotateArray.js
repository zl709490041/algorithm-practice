/* 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 
NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。 */
function minNumberInRotateArray(rotateArray)
{
    /* 方法一：
    var x;
    if(rotateArray.length == 0){
        return 0;
    }
    while(rotateArray[0] <= rotateArray[1]){
        x = rotateArray.shift();
        rotateArray.push(x);
    }
    x = rotateArray.shift();
    rotateArray.push(x);
    return rotateArray; */
    
    /* 方法二
    if(rotateArray.length == 0){
        return 0;
    }
    for(var i = 0;i < rotateArray.length;i++){
        if(rotateArray[i+1] < rotateArray[i]){
            return rotateArray[i+1];
        }
    } */

    /*第三种方法：当数组的第一个元素等于第二个元素等于中间元素时无法判断中间的元素属于哪个子数组
    var i = 0,j = rotateArray.length-1;
    while(i+1 != j){
        var middle = parseInt((i+j)/2);
        if(rotateArray[middle] > rotateArray[i]){
            i = middle;
        }else{
            j = middle;
        }
    }
    return rotateArray[j]; */  
    
    //代码优化:
    var i = 0,j = rotateArray.length-1;
    while(i+1 != j){
        var middle = parseInt((i+j)/2);
        if(rotateArray[i] == rotateArray[j] && rotateArray[i] == rotateArray[middle]){
            return findMin(rotateArray,i,j);
        }
        if(rotateArray[middle] >= rotateArray[i]){
            i = middle;
        }else{
            j = middle;
        }
    }
    return rotateArray[j];
}
function findMin(result,i,j){
    var y = i;
    for(var x = i+1 ; x < j ; x++){
        if(result[x] < result[i]){
            y = x;
        }
    }
    return result[y]
}
var arr = [1,1,0,1,1];
console.log(minNumberInRotateArray(arr));