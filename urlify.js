var urlify = function(str, length) {
 
  var arr = str.split('');
  var ptr = 0;
  while (ptr < str.length) {
    if (arr[ptr] === ' ') {
     
      for (var i = str.length - 1; i > ptr + 3; i--) {
        arr[i] = str[i - 2];
      }
      arr[ptr] = '%';
      arr[ptr+1] = '2';
      arr[ptr+2] = '0';
      console.log(arr, arr.length);
    } 
    ptr++;
  }
 
  return arr.join('');
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
