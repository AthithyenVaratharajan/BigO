function countToZero(n) {

    // Print the number
    console.log(n);

    // Base case: end on zero
    if (n === 0) return;

    // Decrement the non-integer part for non-integers
    let decrement = n % 1;

    // If the number is an integer, decrement by 1 * the sign of n
    if (decrement === 0) {
        decrement = n / Math.abs(n);
    }

    // Recurse
    countToZero(n - decrement);
}

countToZero(5.5);
