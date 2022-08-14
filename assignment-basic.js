// Problem-1 //

function radianToDegree (radian){
    const degree = radian * (180/Math.PI); 
    if(typeof radian !== "number"){
        return 'Please enter a number for correct value';
    }
    else if(typeof radian === "number"){
        return parseFloat(degree.toFixed(2)) ;
    }
    return degree;
}

const radianCount = 20;
const givenDegree = radianToDegree (radianCount);

// Problem-2 //

function isJavaScriptFile (string){
    if (typeof string !== "string") {
        return "Please enter a valid input ";
    }
    const fileName = string.endsWith('.js');
    return fileName;
}
const inputFileName = 'Kawser.js'
const findName = isJavaScriptFile(inputFileName);

// problem-3 //

function oilPrice (diselQuantity, petrolQuantity, octenQuantity){
    if(diselQuantity >=0 && petrolQuantity >=0 && octenQuantity>=0){
    const diselPrice = 114;
    const petrolPrice = 130;
    const octenPrice = 135;

    const diselBuy = diselQuantity * diselPrice;
    const petrolBuy = petrolQuantity * petrolPrice;
    const octenBuy = octenQuantity * octenPrice;

    const totalBuy = diselBuy + petrolBuy + octenBuy;
    return totalBuy;
    }
    else{
      return "Please enter a valid quantity";
    }
  }
    
const totalBuy = oilPrice(1, 2, 3);

// Problem - 4 //

function publicBusFare(totalPerson) {
    const busCapacity = 50;
    const microbusCapacity = 11;
    const busFare = 250;
  
    if(totalPerson > 0){
      if (totalPerson >= busCapacity) {
        let byMicrobus = totalPerson % busCapacity;
        if (byMicrobus < busCapacity && byMicrobus >= microbusCapacity) {
          let byPublicBus = byMicrobus % microbusCapacity;
          if (byPublicBus < microbusCapacity) {
            let totalBusFare = byPublicBus * busFare;
            return totalBusFare;
          }
      } 
      else if (byMicrobus < microbusCapacity) {
          let totalBusFare = byMicrobus * busFare;
          return totalBusFare;
        }
      } 
      else if (totalPerson < busCapacity && totalPerson >= microbusCapacity) {
        let byPublicBus = totalPerson % microbusCapacity;
        if (byPublicBus < microbusCapacity) {
          let totalBusFare = byPublicBus * busFare;
          return totalBusFare;
        }
      } 
    }
      else{
        return "Enter a valid number of people!"
    }
  }
  const totalcost = publicBusFare(365);

// Problem - 5 //

function isBestFriend(personX, personY) {
    if (typeof personX !== "object" && typeof personY !== "object") {
      return "Enter a valid input";
    }
    else if( personX.name.toLowerCase() == personY.friend.toLowerCase() && personY.name.toLowerCase() == personX.friend.toLowerCase()) {
      return true;
    } 
    else {
      return false;
    }
  }

// Problem Solved //

