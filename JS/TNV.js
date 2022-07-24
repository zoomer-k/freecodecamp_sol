function telephoneCheck(str) {
  let numRegex = /^\d{3}[ -]*\d{3}[ -]*\d{4}$/g;
  let interNumRegex = /^1[ -]*\d{3}[ -]*\d{3}[ -]*\d{4}$/g;
  let buracketRegex = /^[(]\d{3}[)][ ]*\d{3}[ -]*\d{4}$/g;
  let interBracketRegex = /^1[ ]*[(]\d{3}[)][ ]*\d{3}[ -]*\d{4}$/g;
  if (numRegex.test(str)){
    return true;
  } else if (interNumRegex.test(str)){
    return true;
  } else if (buracketRegex.test(str)){
    return true;
  } else if (interBracketRegex.test(str)){
    return true;
  } else {
    return false;
  }
}
