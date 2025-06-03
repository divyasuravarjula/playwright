let  s = " fly me   to   the moon " ;
let snew  = s.trimEnd(" ");
let sarr = snew.split(" ");
let len = sarr.length;
console.log(`The length of the word ${sarr[len-1]} is `+sarr[len-1].length);
