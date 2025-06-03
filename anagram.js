function anagram(word1,word2) {
    let word1s = word1.toUpperCase().split("").sort().join("");
    let word2s = word2.toUpperCase().split("").sort().join("");

    if(word1s === word2s)
    {
        console.log(`${word1} and ${word2} are anagrams`)
    }
    else
    {
        console.log(`${word1} and ${word2} are not anagrams`)
    }
}

anagram("diya","sai");