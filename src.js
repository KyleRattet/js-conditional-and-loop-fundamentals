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
  },

  sumOfN: function (num) {
    return (1 + num) * num / 2;
  },

  moviesFor: function(actor) {
    switch (actor) {
      case "Robin Williams":
        return "Jumanji, Hook, Good Will Hunting";
      case "Sandra Bullock":
        return "Gravity, The Lake House, The Blind Side";
      case "Daniel Radcliffe":
        return "All of the Harry Potters";
      default:
        return "Please provide an actor or actress";
    }
  },

  joinWithForAndIndex: function (array) {
  var results = "";

  for (var i = 0; i < array.length; i++) {
    results += array[i]+i;
  }

  return results;
  },

  joinWithForandToken: function (array) {
    var results = '';

    for (var i = 0; i <= array.length; i++) {
      if (i < array.length -1) {
        results += array[i] + '*';
      } else {
        results += array[i];
      }
    }

      return results;
  }

};

module.exports = yourCode;





