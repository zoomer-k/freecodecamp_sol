function checkCashRegister(price, cash, cid) {
  var returnArray = [
    {index:0,unit:"PENNY", amount:0.01, count:0},
    {index:1,unit:"NICKEL", amount:0.05, count:0},
    {index:2,unit:"DIME", amount:0.1, count:0},
    {index:3,unit:"QUARTER", amount:0.25, count:0},
    {index:4,unit:"ONE", amount:1, count:0},
    {index:5,unit:"FIVE", amount:5, count:0},
    {index:6,unit:"TEN", amount:10, count:0},
    {index:7,unit:"TWENTY", amount:20, count:0},
    {index:8,unit:"ONE HUNDRED", amount:100, count:0}
  ]
  console.log(cid[0])
  //console.log(cid[1][1])
  //console.log(returnArray[0].amount)
  //console.log(cid[1][1]/returnArray[0].amount);
  // 割り算では、誤差が生じる
  // var initArray = returnArray.map(x => {
  //   x.count = cid[x.index][1] / x.amount;
  //   return x;
  // }
  var initArray = returnArray.map(x => {
    var count = 0;
    var cid_rest = cid[x.index][1];
    //console.log(cid_rest)
    while (cid_rest > 0){
      cid_rest = cid_rest - x.amount;
      count ++;
    }
    x.count = count;
    return x;
  })
  var reverseArray = initArray.reverse();
  //console.log(reverseArray)

  // return change
  var change_money = cash - price;
  console.log("change money is " , change_money) 
  var change_money_rest = change_money

  var change_money_sum = 0;

  var changeArray = reverseArray.map(x => {
    //console.log(x)
    var change = 0;
    if (x.amount > change_money_rest){
      //console.log(x.amount, "is too big currency")
    }
    else if (x.amount <= change_money_rest && change_money_rest > 0){
      //console.log(x.amount, "is good currency for change")
      var count = 0;
      while (x.count > count && 
        Math.round( (change_money - change_money_sum -x.amount) * 1000 )/1000 >= 0) {
        //console.log(change_money, change_money_sum, x.amount)
        //console.log(change_money - change_money_sum -x.amount)
        //console.log(x.count, count)
        change_money_rest = change_money_rest - x.amount;
        count ++ ;
        change = Math.round( (change + x.amount) * 1000 ) / 1000;
        change_money_sum = Math.round( ( change_money_sum + x.amount ) * 1000  ) / 1000;
        //console.log("change_money_sum", change_money_sum )
        //console.log("after", Math.round( (change_money - change_money_sum -x.amount ) * 1000 ) / 1000)
        //console.log(change_money_rest - x.amount)
      }
    }
    return [x.unit, change];
  })

  //console.log(changeArray)
  var change_diff = change_money - change_money_sum;
  var cid_sum_init = 0;
  var cid_sum = cid.reduce(
    (previousValue, currentValue) => previousValue + currentValue[1] , cid_sum_init
  );
  console.log("cid_sum is ", cid_sum)

  var cid_change_diff = cid_sum - change_money;

  var ansObject =
      (cid_change_diff == 0) ? {status:"CLOSED"} 
      : (change_diff == 0 ) ? {status:"OPEN"} 
      : {status:"INSUFFICIENT_FUNDS"}

  ansObject.change = 
      ( cid_change_diff == 0) ? cid
      : (change_diff == 0 ) ? changeArray.filter(x => x[1] > 0) 
      : [];

  console.log("change_money_sum is ", change_money_sum)
  //console.log("change_diff is ", change_diff)
  console.log(ansObject);
  return ansObject;
}
