//MaxProfit
//imagine you are buying and selling stock 

const maxProfit = price =>{
    let minPrice = prices[0]; // assume first day is the cheapest buy
    let maxProfit = 0;

    for(let i =1; i<prices.length; i++){
        const currentPrice = prices[i];

        //update minPrice if currentPrice is lower
        minPrice = Math.min(minPrice, currentPrice);
       

        const potencialProfit = currentPrice -minPrice;
        maxProfit = Math.max(maxProfit, potencialProfit);
        console.log(maxProfit);
    }
    return maxProfit;
}

const prices = [7,1,5,3,6,4];
const profit = maxProfit(prices);
console.log("Maximum profit: ", profit);