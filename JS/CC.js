function rot13(str) {
  let shiftStr="";
  const ALPH_ARR = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  for (let i=0; i < str.length; i++){
    if (ALPH_ARR.includes(str[i])){
      let charIndex = ALPH_ARR.indexOf(str[i]);
      if ( charIndex < 13){
        shiftStr += ALPH_ARR[charIndex + 13];
      } else{
        shiftStr += ALPH_ARR[charIndex - 13];
      }
    }else {
    shiftStr += str[i];
    }
  }
  return shiftStr;
}
