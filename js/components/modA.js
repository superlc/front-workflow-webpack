/**
 * modA：未知个数的一系列值求和
 * */
function add() {
    let params = [...arguments];
    let sum = 0;
    params.forEach(function (item) {
        sum += item;
    });
    return sum;
}

export default add;