const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function add(total, value, index, array){
    return total + value;
}
//const totalBatteries = batteryBatches.reduce(total , value, index, array)
// return total + value;

const sum = batteryBatches.reduce(add);
console.log(sum);
