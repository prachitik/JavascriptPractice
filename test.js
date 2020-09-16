var heightChecker = function(heights) {
    let count=0;
    let i,j, swap=false;
    let sorted = heights.concat().sort(function(a, b){return a-b});
    for(j=0;j<heights.length;j++){
        console.log(sorted[j]);
    }
    console.log("heights:");
    for(j=0;j<heights.length;j++){
        console.log(heights[j]);
    }
    for(i=0;i<heights.length;i++){
        if(heights[i]!=sorted[i])
        count++;
    }
    return count;
};
let a=[1,1,4,2,1,3];
console.log(heightChecker(a));

/*function sort(arr) {
    return arr.concat().sort();
  }
  
  // Or:
  return Array.prototype.slice.call(arr).sort(); // For array-like objects
  */