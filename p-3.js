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
console.log(totalBuy);