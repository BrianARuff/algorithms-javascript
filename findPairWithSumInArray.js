const arr = [55, 9, 78, 77, 53, 92, 45, 7, 11, 56, 57, 2, 49, 25, 61, 75, 18, 67, 50, 55, 43, 15, 49, 26, 76, 90, 83, 49, 63, 24, 72, 9, 30, 70, 21, 42, 88, 46, 89, 7, 90, 7, 87, 66, 70, 21, 42, 35, 47, 7, 50, 28, 18, 29, 34, 26, 31, 44, 45, 90, 18, 51, 76, 45, 63, 56, 84, 32, 41, 82, 53, 1, 7, 98, 88, 42, 99, 31, 64, 12, 84, 91, 67, 93, 26, 24, 51, 2, 32, 31, 88, 64, 77, 82, 34, 57, 41, 26, 58, 53];


// 1544ms best performance...it is almost 1 second faster than the others at large scale...
const functionOne = (arr, sum) => {
  for(let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] + arr[j] === sum){
        return 'Pair found at ' + i + ' and ' + j;
      }
    }
  }
  return 'Pair not found';
};

//2405ms nearly the same speed as third function...
const functionTwo = (arr, sum) => {
  arr.sort();
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    if (arr[low] + arr[high] == sum){
      return 'Par found at ' + low + ' and ' + high;
    }
    if (arr[low] + arr[high] < sum){
      low++;
    } else {
      high--;
    }
  }
  return "No pair found.";
};

//2236ms nearly the same speed as the second function
const functionThree = (arr, sum) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++){
    if(map.has(sum - arr[i])){
      return 'Pair found at index ' + map.get(sum - arr[i]) + ' and ' + i;
    }
    map.set(arr[i], i);
  }
  return 'Pair not found.';
};


const iterations = 1000000;

console.time('Function #1: ');

for(let i = 0; i < iterations; i++){
  functionOne(arr, Math.floor(Math.random() * 100));
}
console.timeEnd('Function #1: ');
//--------------------------------------------------
console.time('Function #2: ');

for(let i = 0; i < iterations; i++){
  functionThree(arr, Math.floor(Math.random() * 100));
}
console.timeEnd('Function #2: ');
//--------------------------------------------------
console.time('Function #3: ');

for(let i = 0; i < iterations; i++){
  functionThree(arr, Math.floor(Math.random() * 100));
}
console.timeEnd('Function #3: ');