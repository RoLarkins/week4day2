function chunkArrayInGroups(arr, size) {
    var groups = [];
    while ( arr.length >0){
      groups.push(arr.slice(0,size));
      arr = arr.slice(size);
      console.log(groups)
    }
    return groups
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2)









  function bouncer(arr) {
    var truthies = [];
    for (var elem of arr) {
        console.log(elem);
        if (elem) truthies.push(elem);
    }
    return truthies; 
}

bouncer([7, "ate", "", false, 9]); 