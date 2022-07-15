let cashIn = 0;
let chosenProductId = 0;
const productMap = new Map();

function initProductMap() {
    productMap.set(1, 10);
    productMap.set(2, 10);
    productMap.set(3, 10);
    productMap.set(4, 10);
    productMap.set(5, 10);
    productMap.set(6, 10);
    productMap.set(7, 10);
    productMap.set(8, 10);
    productMap.set(9, 10);
    productMap.set(10, 10);
    productMap.set(11, 10);
    productMap.set(12, 10);
    productMap.set(13, 10);
    productMap.set(14, 10);
    productMap.set(15, 10);
    productMap.set(16, 10);
}

function transitToStep1() {

}

function transitToStep2() {

}

function transitToStep3() {
    
}

$(".price-wrapper").on("click", e => {
    cashIn = $(this).attr("data-value");

});

