// TODO: WORK IN PROGRESS (GENERALIZING CSS SPECIFICITY TOOL)

const arr_stat = require('./array_statistics.js');
const specific = require('./css_specificity_functions.js');

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
specificity_sorted_arr.sort(specific.compareNumbers);



// UNIQUE SELECTORS SORTED
var selector_unique_sorted_arr = [...new Set( selector_indexed_arr )];
selector_unique_sorted_arr = selector_unique_sorted_arr.sort(specific.compareString);


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
result2.std.specificity=arr_stat.standardDeviation(specificity_sorted_arr),
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
result2.std.selector_length = arr_stat.standardDeviation(selector_length_arr);
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
    selectors: specific.getSignificantValues(selector_unique_sorted_arr, selector_len_sig_threshold),
    threshold: selector_len_sig_threshold,
  },
  specificity: {
    selectors: significant_selectors,
    threshold: specificity_sig_threshold
  }
};

console.table(result2);

dir(result2);
