// 객체를 순회 하는 방법들 정리 

let order = {1002: 2, 1010: 1}
let stock = [{name: "test", id: "1002", quantity: 100}, {name: "moreTest", id: "1010", quantity: 100}]
stock.forEach(element => {
    Object.keys(order).forEach(function(key) {
        const quantityBought = order[key];
        // == and not === because element.id is a string and key is a number
        if (element.id == key) {
            element.quantity -= quantityBought;
        }
    });
});
console.log(stock);

/*해
 방법 2 
 구조분해
*/

const { timezoneDay } = this.state.timezoneDay