const str="The quick brown fox jumps over the lazy dog";

function get_str_without_vowel(){
    const vowels=["a","e","i","o","u"];
    let result="";

    for(let char of str){
        if(!vowels.includes(char.toLowerCase())){
            result=result+char;
        }
    }
    return result;
}

let ans=get_str_without_vowel(str);
console.log(ans);
