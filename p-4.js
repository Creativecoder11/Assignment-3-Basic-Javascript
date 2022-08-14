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
  console.log(totalcost);