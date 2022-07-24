function palindrome(str) {
 const regex = /[^A-Za-z0-9]/ig
 const aZString = str.replace(regex, "")
 const azString = aZString.toLowerCase();
 //console.log(azString[azString.length - 1])
 for (let i = 0; i < azString.length/2; i++){
   var forWard = azString[i];
   var lastWard = azString[azString.length - i-1];
   //console.log("for: " + forWard);
   //console.log("last: " + lastWard)
   if(forWard !== lastWard){
     return false
   }
 }
  return true;
}



console.log(palindrome("abcddcba"));
