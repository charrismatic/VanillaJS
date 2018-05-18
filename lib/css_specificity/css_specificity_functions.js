function StandardDeviation(numbersArr) {
  //--CALCULATE AVAREGE--
  var total = 0;
  for(var key in numbersArr) {
    total += numbersArr[key];
  }

  //--CALCULATE AVAREGE--
  var meanVal = total / numbersArr.length;

  //--CALCULATE STANDARD DEVIATION--
  var SDprep = 0;
  for(var key in numbersArr) {
    SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal),2);
  }

  //--CALCULATE STANDARD DEVIATION--
  var SDresult = Math.sqrt(SDprep/numbersArr.length);
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
