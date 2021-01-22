

//**  kilometerToMeter */

function kilometerToMeter(kilometer){
  const meter = kilometer * 1000;
  
  if(kilometer <=-1){
    console.log('Distance negative hoina chandu. Thikthak distance boshao.')
  }
  else{
    return meter;
  }
}



//**   budgetCalculator */

// Number of gadgets
let watchNumber = 3;
let phoneNumber = 7;
let laptopNumber = 4;

// total prices of gadgets
let watchPrice = watchNumber * 50;
let phonePrice = phoneNumber * 100;
let laptopPrice = laptopNumber * 500;
let total = budgetCalculator(watchPrice, phonePrice, laptopPrice);

function budgetCalculator(watchPrice, phonePrice, laptopPrice){
  let result = watchPrice + phonePrice + laptopPrice;
  if(watchNumber <= -1 || phoneNumber <= -1 || laptopNumber <= -1){
    console.log('This value can not be negative.')
  }
  else{
    return result;
  }
}



//**  hotelCost */

function hotelCost(hotelStay){
    let hotelCost = 0;
    if(hotelStay<=10){
        hotelCost = hotelStay * 100;
    }
    else if(hotelStay<=20){
        let firstPart = 10 * 100;
        let remaining = hotelStay - 10;
        let secondPart = remaining * 80;
        hotelCost = firstPart + secondPart;
    }
    else{
        let firstPart = 10 * 100;
        let secondPart = 10 * 80;
        let remaining = hotelStay - 20;
        let thirdPart = remaining * 50;
        hotelCost = firstPart + secondPart + thirdPart;
    }
    return hotelCost;
}


//**  megaFriend */

function megaFriend() {
  let megaFriendList = ['Sumon Biswas', 'Avijit Kundu Gopi', 'Julian Jawad Ahmed Zim', 'Zillur Rahman', 'Mostafizur Rahman Sawon'];
  let count = 0;
  
  for (let i = 0; i < megaFriendList.length; i++){
      if(megaFriendList[i].length > count){
      let count = megaFriendList[i].length;
      longest = megaFriendList[i];
    }
  }

  return longest;
  }