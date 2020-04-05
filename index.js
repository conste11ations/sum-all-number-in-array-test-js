const sumItems = function(array) {
  
  if (array.length === 0) {
    return 0;
  } else {
    if (array.length === 1) {
      if (Array.isArray(array[0])) {
        return sumItems(array[0]) 
      }
      return array[0];
    }

    if (Array.isArray(array[0])) {
      return sumItems(array[0]) + sumItems(array.slice(1)) ;
    }
  
   return array[0] + sumItems(array.slice(1));
  }
}
