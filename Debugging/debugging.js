//THESE FUNCTIONS CONTAIN BUGS!!!!!

function listTriangularNumbers(n){
    var num;
    var array = [];
    for(i = 1; i <= n; ++i){
       num = i;
       for(j = i; j >= 1; --j){
          num = num + j;
       }
       array.push(num);
    }
    return array;
}

/**
 * This function creates an HTML times table
 * @param   {number} row The row number
 * @param   {number} col The column number
 * @returns {string} The HTML table
 */
function multTable(row, col) {
    var table = "<table>";
    var x;
    for (var i = 1; i <= row; ++i) {
        table = table + "<tr>";
        for (var j = 1; j <= col; ++j) {
            x = i * j;
            table = table + "<td>" + x + "</td>";
        }
        table = table + "</tr>";
    }
    table = table + "</table>";
    return table;
}

function factorial(n){
    var result = 1;
    for(var i = n; i >=2 ; --i){
        result = result*i;
    }
    return result;
}

function combinations(n,k){
    var c;
    c = factorial(n)/(factorial(k)*(factorial(n-k)));
    return c;
}


/**
 * Arranges an array from least to greatest
 * @param   {Array} a An array to sort
 * @returns {Array} The sorted array
 */
function iSort(a) {
    result = a;
    for (var i = 1; i < result.length; ++i) {
        var j = result[i];
        var k;
        for (k = i - 1; (k >= 0) && (j < result[k]); k--) {
            result[k + 1] = result[k];
        }
        result[k + 1] = j;
    }
    return result;
}

function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}

function selectionSort(arr){
  var minIdx;
  var temp;
  var max = arr.length;
  for(var i = 0; i < max; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}










