 function palindrome(str) {
   let len = str.length;
   let mid = Math.floor(len / 2);

   for (let i = 0; i < mid; i++) {
     if (str[i] !== str[len - 1 - i]) {
       return false;
     }
   }
   return true;
 }

 const text = "kakak dengan katak dengan harga 12021"
 const split = text.split(" ")
 let floor = []
 //  console.log(split);
 for (let i = 0; i < split.length; i++) {
   if (palindrome(split[i])) {
     floor.push(split[i])
   }
 }
 const result = floor.join(" ")
 const hasil = floor.map((item, index) => {
   return split.indexOf(item)
 })
 const totalData = split.map((item, index) => {
   return index
 })
 //  console.log(totalData);

 const filterArray = (totalData, hasil) => {
   const filtered = totalData.filter(el => {
     return hasil.indexOf(el) === -1
   })
   return filtered
 }

 console.log(`Palindrome word : ${result} `)
 console.log(`Invalid palindrome : ${filterArray(totalData, hasil)}`);
 console.log(`Palindrome index : ${hasil}`)
 console.log(`Total detected Palindrome : ${hasil.length}`)