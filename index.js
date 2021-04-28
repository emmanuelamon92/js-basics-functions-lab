// Code your solution in this file!
let hqDistance = 42;

const distanceFromHqInBlocks = distanceBlc => {
    return Math.abs(distanceBlc - hqDistance)
}

const distanceFromHqInFeet = distanceFt => {
    return distanceFromHqInBlocks(distanceFt)*264
}

const distanceTravelledInFeet = (start, destination) => {
    return Math.abs((start - destination))*264
}


const calculatesFarePrice = (start, destination) => {
    const freeFt = 400
    let fairPrice = 0;
    let distanceTravelledInFt = distanceTravelledInFeet(start, destination);
    console.log(distanceTravelledInFt)
    if (distanceTravelledInFt <= freeFt){
        return fairPrice;
    } else if (distanceTravelledInFt > freeFt && distanceTravelledInFt < 2000) {
        fairPrice = (distanceTravelledInFt - freeFt) * .02;
    } else if (distanceTravelledInFt > 2000 && distanceTravelledInFt < 2500){
        fairPrice = 25;
    } else {
        return 'cannot travel that far'
    }
    return fairPrice;
}