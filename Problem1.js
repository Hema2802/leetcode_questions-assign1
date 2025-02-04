


const candies=[2,3,5,1,3];
const extraCandies=3;

var kidsWithCandies = function(candies, extraCandies) {
    let max=candies[0];
    for(let candy of candies){
        if(candy>max){
            max=candy;
        }
    
    }
    console.log("max value:",max);
    return candies.map(candy=>candy+extraCandies>=max);
    
};

console.log(kidsWithCandies(candies,extraCandies));