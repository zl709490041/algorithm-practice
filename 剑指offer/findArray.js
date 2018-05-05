//  在一个二维数组中，每一行按照从左至右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
function Find(target,array){
    var rows = array.length;  //数组的行数
    var columns = array[0].length;  //数组的列数
    var flag = false;
    for(var i = rows-1,j = 0;;){
        if(array[i][j] === target){
            flag = true;
            break;
        }else if(array[i][j] < target){
            j++;
        }else{
            i--;
        }
        if(i < 0 || j > columns-1){
            break;
        }
    }
    if(flag === true){
        return true;
    }else{
        return false;
    }
}
Find(7,[[1,2,6,8],[2,4,7,9],[5,9,10,12]]);