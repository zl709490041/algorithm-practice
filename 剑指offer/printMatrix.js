/* 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10. */
function printMatrix(matrix)
{
    var rows = matrix.length;
    var columns = matrix[0].length;
    var arr = [];
    if(rows == 0 || columns == 0) return arr;
    var left = 0,bottom = rows - 1,top = 0,right = columns - 1;
    while(left <= right && top <= bottom){
        for(var i = left;i <= right;i++){
            arr.push(matrix[top][i]);
        }
        for(var i = top+1;i <= bottom;i++){
            arr.push(matrix[i][right]);
        }
        if(top!=bottom){
            for(var i = right-1;i >= left;i--){
                arr.push(matrix[bottom][i]);
            }
        }
        if(left!=right){
            for(var i = bottom-1;i > top;i--){
                arr.push(matrix[i][left]);
            }
        }
        top++,bottom--,left++,right--;      
    }
    return arr;  
}
console.log(printMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));