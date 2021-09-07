var convertToTitle = function(n) {
  var res='';
  while(n>0){
      var a = parseInt((n-1)%26);
      n = parseInt((n-1)/26);
      res = String.fromCharCode(a+65) + res;
  }
  return res;
};

console.log(convertToTitle(12));