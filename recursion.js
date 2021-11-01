/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(nums.length=== i)return 1;
  return nums[i]* product(nums,i+1)

}
/** longest: return the length of the longest word in an array of words. */

function longest(words,i=0) {
  if(i===words.length) return 0
  let compare = longest(words,i+1)
  return compare>words[i].length ? compare:words[i].length

}

/** everyOther: return a string with every other letter. */

function everyOther(str,i=0) {
  if(i==str.length) return'';
  let val =i%2===0 ? str[i]:''
  return `${val}${everyOther(str,i+1)}`
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left=0) {
  let right = str.length-(1+left);
  if(left>=right) return true
  let bool = str[left] === str[right];
  return bool*isPalindrome(str, left+1) ===1 ? true:false;



}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(arr.length <=i)return -1;
  if(arr[i]=== val) return i;
  return findIndex(arr,val,i+1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1) {
  if(i<0) return ''
  return str[i] +revString(str,i-1)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let accumulator=[];
  for(let val of Object.values(obj)){
    if(typeof val === 'string'){
      accumulator.push(val)
    }
    if(typeof val === 'object'){
      accumulator=[...accumulator,...gatherStrings(val)]
    }
  }
  return accumulator
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val,left=0,right=arr.length-1) {
  if(left>right) return -1;
  let middle = Math.floor((left+right)/2);
  let current= arr[middle];
  if(current===val){
    return middle
  }
  else if(current>val){
    return binarySearch(arr,val,left=left, right=middle-1)
  }
  else if(current<val){
    return binarySearch(arr,val,left=middle+1, right=right)
  }

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
