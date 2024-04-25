function longestSubstring(s) {
    let longest = 0;
    let start = 0;
    let charIndexMap = {};

    for (let i = 0; i < s.length; i++) {
        if (charIndexMap[s[i]] >= start) {
            start = charIndexMap[s[i]] + 1;
        }
        charIndexMap[s[i]] = i;
        longest = Math.max(longest, i - start + 1);
    }

    return longest;
}

module.exports = { longestSubstring };


