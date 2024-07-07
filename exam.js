// function reverseString(s) {
//     return s.split('').reverse().join('');
// }

// function reverseInteger(n) {
//     const sign = Math.sign(n);
//     n = Math.abs(n);
//     const reversedNumber = parseInt(n.toString().split('').reverse().join(''));
//     return sign * reversedNumber;
// }

// // let inputString = "Abdullo";
// let inputInteger = 12;

// let reversedString = reverseString(inputString);
// let reversedInteger = reverseInteger(inputInteger);

// console.log("Reversed String:", reversedString);  
// console.log("Reversed Integer:", reversedInteger); 



// function Palindrome(exam) {
//  exam = exam.toLowerCase().replace(/[^a-z0-9]/g, ''); 
//     return exam === exam.split('').reverse().join('');
// }

// const inputString = "Abdullo, Ibroxim, Muzaffar!";
// console.log(Palindrome(inputString));  



// function chunkWords(words, chunkSize) {
//     const chunks = [];
//     let index = 0;
    
//     while (index < words.length) {
//         chunks.push(words.slice(index, index + chunkSize));
//         index += chunkSize;
//     }
    
//     return chunks;
// }
// const words = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
// const chunkSize = 7;
// const result = chunkWords(words, chunkSize);
// console.log(result);


// function titleCase(str) {
//     let words = str.toLowerCase().split(' ');    
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].toUpperCase() + words[i].slice(1);    }
    
//     return words.join(' ');
// }

// const sentence = "abdullo, ibroxim, muzaffar";
// const titleCased = titleCase(sentence);
// console.log(titleCased); 

// function countVowels(str) {
//     str = str.toLowerCase();
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countVowels("aeioou")); 


// function identifyCountry(phoneNumber) {
//     if (phoneNumber.startsWith("+998")) {
//         return "Aloqani Cheklash o'rnatilgan Xisobingizni to'ldiring va Keyinroq urinib ko'ring Summa nasheviy zapros";
//     } else if (phoneNumber.startsWith("+7")) {
//         return "Siz Rasiskiy Nomerga telefon qildingiz Provet Kak dela TEACHER";
//     } else {
//         return "Abanyent xizmat ko'rsatish doirasindan tashqarida Keyinroq urinib ko'ring";
//     }
// }

// console.log(identifyCountry("+998298901234567")); 


// function maxChar(str) {
//     const charCount = {};
  
//     for (let char of str) {
//       charCount[char] = charCount[char] + 1 || 1;
//     }
  
//     let maxChar = '';
//     let maxCount = 0;
  
//     for (let char in charCount) {
//       if (charCount[char] > maxCount) {
//         maxChar = char;
//         maxCount = charCount[char];
//       }
//     }
  
//     return maxChar;
//   }
  
//   console.log(maxChar("Abdullo")); 
  


