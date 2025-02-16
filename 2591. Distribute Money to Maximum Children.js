/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    // Step 1: Base case: not enough money to give at least 1 dollar per child
    if (money < children) return -1;

    // Step 2: Distribute 1 dollar to each child initially
    money -= children;

    // Step 3: Maximize the number of children with 8 dollars
    let eightDollarChildren = Math.min(Math.floor(money / 7), children);
    money -= eightDollarChildren * 7;
    children -= eightDollarChildren;

    // Step 4: Handle leftover money
    if (money > 0 && children === 0) {
        eightDollarChildren--; // Reduce if leftover money can't be distributed
    }

    // Step 5: Handle edge case where leftover money causes a child to receive 4 dollars
    if (children === 1 && money === 3) {
        eightDollarChildren--;
    }

    return eightDollarChildren;
};