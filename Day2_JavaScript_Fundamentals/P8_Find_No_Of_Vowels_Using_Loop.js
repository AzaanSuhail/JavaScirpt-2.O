let f_name = "Azaan suhail siddiqui";

let vowel = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < f_name.length; i++) {
  if (vowel.includes(f_name[i])) {
    console.log("vowel->"+f_name[i]);
    count++;
  } else {
    console.log("consonant->"+f_name[i]);
  }
}

console.log("Number of vowels: " + count);
