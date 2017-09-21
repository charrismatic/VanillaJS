//https://gist.github.com/Daniel-Hug/7273430

var arr = {	
	max: function(array) {
		return Math.max.apply(null, array);
	},
	
	min: function(array) {
		return Math.min.apply(null, array);
	},
	
	range: function(array) {
		return arr.max(array) - arr.min(array);
	},
	
	midrange: function(array) {
		return arr.range(array) / 2;
	},

	sum: function(array) {
		var num = 0;
		for (var i = 0, l = array.length; i < l; i++) num += array[i];
		return num;
	},
	
	mean: function(array) {
		return arr.sum(array) / array.length;
	},
	
	median: function(array) {
		array.sort(function(a, b) {
			return a - b;
		});
		var mid = array.length / 2;
		return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
	},
	
	modes: function(array) {
		if (!array.length) return [];
		var modeMap = {},
			maxCount = 0,
			modes = [];

		array.forEach(function(val) {
			if (!modeMap[val]) modeMap[val] = 1;
			else modeMap[val]++;

			if (modeMap[val] > maxCount) {
				modes = [val];
				maxCount = modeMap[val];
			}
			else if (modeMap[val] === maxCount) {
				modes.push(val);
				maxCount = modeMap[val];
			}
		});
		return modes;
	},
	
	variance: function(array) {
		var mean = arr.mean(array);
		return arr.mean(array.map(function(num) {
			return Math.pow(num - mean, 2);
		}));
	},
	
	standardDeviation: function(array) {
		return Math.sqrt(arr.variance(array));
	},
	
	meanAbsoluteDeviation: function(array) {
		var mean = arr.mean(array);
		return arr.mean(array.map(function(num) {
			return Math.abs(num - mean);
		}));
	},
	
	zScores: function(array) {
		var mean = arr.mean(array);
		var standardDeviation = arr.standardDeviation(array);
		return array.map(function(num) {
			return (num - mean) / standardDeviation;
		});
	}
};

// Function aliases:
arr.average = arr.mean;

////////

function StandardDeviation(numbersArr) {
    //--CALCULATE AVAREGE--
    var total = 0;
    for(var key in numbersArr) 
       total += numbersArr[key];
    var meanVal = total / numbersArr.length;
    //--CALCULATE AVAREGE--
  
    //--CALCULATE STANDARD DEVIATION--
    var SDprep = 0;
    for(var key in numbersArr) 
       SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal),2);
    var SDresult = Math.sqrt(SDprep/numbersArr.length);
    //--CALCULATE STANDARD DEVIATION--
    return SDresult;
    
}

function sortObject(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
}

function doSort(obj) {
  var ordered={};
  Object.keys(obj).sort().forEach(function(key) {
    ordered[key] = obj[key]; 
  });
  return ordered;
}


function compareNumbers(a, b) {
  return a - b;
}

function compareString(a,b){
  a=a.trim();
  b=b.trim();
  
  if (a.length < b.length){
    return -1;
  } else if (a.length > b.length) {
    return 1; 
  } else if ( a.replace(" ", "").length < b.replace(" ", "").length) {
    return -1;
  } else if ( a.replace(" ", "").length > b.replace(" ", "").length) {
    return 1;
  } else {

    var nameA = a.toUpperCase();
    var nameB = b.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

  if (nameA < nameB) {
      return -1;
    }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
  } 
}



function sortInt(arr){
  arr.sort(compareNumbers);
}


Array.prototype.clone = function() {
	return this.slice(0);
};

function getSorted(obj, comparator=null){
  
  var sort_function;
  if(comparator) {
    if (comparator==="int"){
      sort_function=compareNumbers;
    }
    
    else if (comparator==="string_no"){
      sort_function=compareString;
    }
  } 
   
  copy = obj.clone();
  return copy.sort(sort_function);  
}

function getSignificantValues(arr, two_std){
	var retArr = [];
	for( var i = arr.length; i >=0; i--){
	
		if (arr[i-1].length >= two_std) {
			retArr.push( arr[i] );  
		} else {
		    i = -1;
		    return retArr;  
		}
	}

	return retArr;
}




var result2 = {
  num: {},
  min: {},
  max: {},
  sum: {},
  avg: {},
  std: {},
  top: {},
  significant: {},
};

//  SPECIFICITY STATISTICS 
var selector_indexed_arr = [];
var specificity_indexed_arr = [];
for (var i = 0; i < embeddedJsonData.length; i++){

  // SPECIFICITY VALUES
  specificity_indexed_arr.push(embeddedJsonData[i].specificity);
  
  // SELECTOR VALUES
  selector_indexed_arr.push(embeddedJsonData[i].selectors);
}


var specificity_sorted_arr = specificity_indexed_arr.clone();
specificity_sorted_arr.sort(compareNumbers);



// UNIQUE SELECTORS SORTED
var selector_unique_sorted_arr = [...new Set( selector_indexed_arr )];
selector_unique_sorted_arr = selector_unique_sorted_arr.sort(compareString);


// SELECTORS STATISTICS
var selector_length_arr = [];
var significant_selectors = [] 
for (i=0; i < selector_unique_sorted_arr.length; i++){
  selector_length_arr.push(selector_unique_sorted_arr[i].length);  
}



result2.num = {
	total_selectors: selector_indexed_arr.length,
	unique_selectors: selector_unique_sorted_arr.length,
	total_specificity_values: specificity_sorted_arr.length,
}

result2.min.specificity=specificity_sorted_arr[0]
result2.max = {
  selector_length: {
    selector: selector_unique_sorted_arr.slice(-1)[0],
    length: selector_unique_sorted_arr.slice(-1)[0].length,  	
  },
  specificity: {
  	value: specificity_sorted_arr.slice(-1)[0],
  	selector: ""
  } 
}

result2.sum.specificity=specificity_sorted_arr.reduce(function(a,b){return a + b}, 0)
result2.std.specificity=arr.standardDeviation(specificity_sorted_arr),
result2.avg.specificity= (result2.sum.specificity) / (result2.num.total_specificity_values);
result2.top = { 
  specificity: {
  	top_value: {},
  	top20_threshold: specificity_sorted_arr.slice(-20)[0],
    top20_values: specificity_sorted_arr.slice(-20)
  }
};

var specificity_sig_threshold = result2.avg.specificity + (result2.std.specificity * 2);



// selector_unique_sorted_list = selector_unique_sorted_arr.join(',');

result2.min= { 
  length: selector_unique_sorted_arr[0].length, 
  selector: selector_unique_sorted_arr[0] 
}

result2.max = {

}

result2.sum.selector_length = selector_length_arr.reduce(function(a,b){return a + b}, 0);
result2.std.selector_length = arr.standardDeviation(selector_length_arr);
result2.avg.selector_length = result2.sum.selector_length / result2.num.total_selectors;

result2.top = {
  selector_length: { 
    top: selector_unique_sorted_arr.slice(-1)[0],
    top20 : { 
      threshold: selector_unique_sorted_arr.slice(-20)[0].length,
      selectors: selector_unique_sorted_arr.slice(-20),
    }
  }
}

// SIGNIFICANTLY SPECIFIC SELECTORS
var specificity_indexed_arr = [];

for (i = 0; i < embeddedJsonData.length-1; i++){
  if (embeddedJsonData[i].specificity >= specificity_sig_threshold ){
    significant_selectors.push({
      selector: embeddedJsonData[i].selectors,
      specificity: embeddedJsonData[i].specificity
    }); 	
  } 
}



var selector_len_sig_threshold = (result2.avg.selector_length + (result2.std.selector_length * 2));

result2.significant = { 
  selector_length: {
   selectors: getSignificantValues(selector_unique_sorted_arr, selector_len_sig_threshold), 
   threshold: selector_len_sig_threshold,
  },
  specificity: {
    selectors: significant_selectors,
    threshold: specificity_sig_threshold
  }
};

console.table(result2);

dir(result2);