function isBestFriend(personX, personY) {
    if (typeof personX !== "object" && typeof personY !== "object") {
      return "Enter a valid input";
    }
    else if ( personX.name.toLowerCase() == personY.friend.toLowerCase() && personY.name.toLowerCase() == personX.friend.toLowerCase()) {
      return true;
    } 
    else {
      return false;
    }
  }
  
  console.log(isBestFriend({ name: "Abul", friend: "babul" },{ name: "Babul", friend: "abul" }));