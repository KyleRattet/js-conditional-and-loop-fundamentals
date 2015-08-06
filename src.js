var yourCode = {
  commafy: function(n) {
    var string = "";
    for (var i = 1; i <= n; i++) {
      if (i < n) {
        string += i+",";
      } else {
        string +=i;
      }
    }
    return string;
  },

  joinToString: function(array) {
  var results = "";

    for (var i = 0; i < array.length; i++) {
      if (i < array.length - 1) {
        results += array[i].toString() + " and ";
      } else {
        results += array[i].toString() + " oh my.";
      }
    }
      return results;
  },

  printBracketedNumbers: function (num) {
    var results = "";
    var i = 0;

    while (i <= num) {
      results += '['+[i]+']';
      i++;
    }
    return results;
  }


};

module.exports = yourCode;




