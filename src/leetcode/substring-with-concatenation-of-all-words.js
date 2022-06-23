/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    const len = words.length;
    if(len == 0){
        return [];
    }
    const iLen = words[0].length;
    const tLen = words.join('').length;
    const sLen = s.length;
    if(iLen * len != tLen || tLen > sLen){
        return []
    }
    
    // 以 tLen 和 len 为 大小步长暴力判断
    const arr = [];
    for(let i = 0, end = sLen - tLen + 1; i < end; i++ ){
        const subStr = s.substr(i, tLen);
        if(inWords(subStr)){
            arr.push(i);
        }
    }
    return arr;

    function inWords(ss) {
        const cW = [...words];
        const end = tLen - iLen + 1;
        let j = 0;
        while( j < end){
            const subStr = ss.substr(j, iLen);
            const idx = cW.indexOf(subStr);
            if(idx == -1){
                return false;
            } else {
                cW[idx] = '1';
            }
            j += iLen;
        }
        if(cW.join('').length == len){
            return true
        }
        return false;
    }
};

const d = findSubstring('barfoothefoobarman', ["foo","bar"])
console.log('ddd', d)