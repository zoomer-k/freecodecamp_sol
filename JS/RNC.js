function convertToRoman(num) {
 let romanNum = ""
 while(num != 0){
   if (num > 999) {
     romanNum += "M";
     num -= 1000;
   } else if (num > 899) {
     romanNum += "CM";
     num -= 900;
   } else if (num > 499) {
     romanNum += "D";
     num -= 500;
   } else if (num > 399){
     romanNum += "CD";
     num -= 400;
   } else if (num > 99){
     romanNum += "C";
     num -= 100;
   } else if (num > 89) {
     romanNum += "XC";
     num -= 90;
   } else if (num > 59) {
     romanNum += "LX";
     num -= 60;
   } else if (num > 49) {
     romanNum +="L";
     num -= 50;
   }  else if (num > 39) {
     romanNum += "XL";
     num -= 40;
   } else if (num > 9) {
     romanNum += "X";
     num -= 10;
   } else if (num == 9) {
     romanNum += "IX";
     num -= 9;
   } else if (num > 4){
     romanNum += "V";
     num -= 5;
   } else if (num == 4){
     romanNum += "IV";
     num -= 4;
   } else if (num > 0){
     romanNum += "I";
     num --;
   } 
 }
 return romanNum;
}
