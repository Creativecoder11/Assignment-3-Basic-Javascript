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
console.log(givenDegree);
