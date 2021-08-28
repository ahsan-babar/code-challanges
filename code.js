const sumOfultiplesOf3And5 = n => {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) sum += i;
    }
    console.log(sum)
    return sum;

}
// sumOfultiplesOf3And5(1000)


const sumOfEvenFibonacci = limit => {
    let prev = 1;
    let sum = 0;
    let temp = 0

    let i = 0
    while (i < limit) {


        temp = i;
        i = i + prev
        prev = temp
        console.log(i)

        if (i % 2 == 0) sum += i;


    }
    console.log(sum)
    return sum;

}
// sumOfEvenFibonacci(4 * 10 ** 6)


const generatePrimeNumbers = limit => {

    const primeNumbers = [];

    for (let i = 2; i <= limit; i++) {

        let isPrime = true;

        for (let j = 2; j <= i / 2; j++) {

            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            // console.log(i, 'Prime')
            primeNumbers.push(i)
        }

    }
    return primeNumbers;
}

// generatePrimeNumbers(11)


const generatePrimeNumbersReverse = limit => {

    for (let i = limit; i > 1; i--) {

        let isPrime = true;

        for (let j = 2; j <= i / 2; j++) {

            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(i, 'Prime')
    }
}

// generatePrimeNumbersReverse(11)

const largestPrimeFactorOfNumber = number => {

    let highestFactor = number;
    let value = number;

    for (let i = 2; i <= Math.floor(number / 2) && value > 1; i++) {

        let isPrime = true;

        for (let j = 2; j <= i / 2; j++) {

            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime && value % i == 0) {
            highestFactor = i;
            value = value / i;
        }

    }
    return highestFactor;
}

// console.log(largestPrimeFactorOfNumber(13195))
// console.log(largestPrimeFactorOfNumber(600851475143))


const reverseNumber = num => {
    // let result1 = '';
    let result2 = 0;
    while (num > 0) {
        const r = num % 10;
        const q = Math.trunc(num / 10);

        // result1 += r
        result2 = result2 * 10 + r
        num = q;
    }

    // console.log(/* result1, */ result2)
    return result2;
}

// reverseNumber(100)

const largestPalindromeByProductOfTwoNDigitNumbers = noOfDigits => {

    const isPalindrome = num => num.toString() == num.toString().split('').reverse().join('');
    const isPalindrome2 = num => num == reverseNumber(num);

    let result = 0;

    for (let i = 10 ** (noOfDigits - 1); i <= 10 ** (noOfDigits) - 1; i++) {
        // console.log(i)

        for (let j = 10 ** (noOfDigits - 1); j <= 10 ** (noOfDigits) - 1; j++) {
            let prod = i * j;
            if (prod > result /* && isPalindrome(prod)  */ && isPalindrome2(prod))
                result = prod
        }
    }

    return result



}
// console.log(largestPalindromeByProductOfTwoNDigitNumbers(3))


// console.log(Number.MAX_SAFE_INTEGER)
const evenlyDivisibleByNaturalNumberUptoLimit = limit => {

    for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {

        let divisible = false;

        for (let j = 2; j <= limit; j++) {

            if (i % j != 0) {
                break;
            }
            else if (j == limit) {
                divisible = true
                break;
            }

        }

        if (divisible) return i;

    }
}

// console.log(evenlyDivisibleByNaturalNumberUptoLimit(20))

const sumSquareDifference = limit => {

    let sumOfSquares = 0;
    let sum = 0;

    for (let i = 1; i <= limit; i++) {
        sumOfSquares += i ** 2;
        sum += i;
    }

    const result = sum ** 2 - sumOfSquares;
    return result;
}

// console.log(sumSquareDifference(100))

const nthPrimeNumber = n => {

    let count = 0;

    for (let i = 2; i <= Number.MAX_SAFE_INTEGER; i++) {

        let isPrime = true;

        for (let j = 2; j <= Math.floor(i / 2); j++) {

            if (i % j == 0) {
                isPrime = false;
                break;
            }

        }

        if (isPrime) {
            // console.log(i)
            ++count;
            if (count == n) return i;
        }
    }
}

// console.log(nthPrimeNumber(10001))

const mergeSort = (arr) => {

    const length = arr.length;
    if (length == 1) return arr;

    let arr1 = arr.slice(0, Math.floor(length / 2))
    let arr2 = arr.slice(Math.floor(length / 2))

    // console.log(arr1, arr2)

    arr1 = mergeSort(arr1)
    arr2 = mergeSort(arr2)

    return merge(arr1, arr2);

}

const merge = (arr1, arr2) => {

    const c = [];


    while (arr1.length > 0 && arr2.length > 0) {

        if (arr1[0] > arr2[0])
            c.push(arr2.shift())
        else
            c.push(arr1.shift())

    }

    while (arr1.length > 0) {
        c.push(arr1.shift())
    }

    while (arr2.length > 0) {
        c.push(arr2.shift())
    }

    return c;

}

console.log(
    mergeSort([1, 3, 4, 2, 5])
)


/* 
const xAdjacentDigitsInAYDigitNumberWithGreatestProduct = (x, y) => {

return 9**(x-1) * 8;

}
console.log(

    xAdjacentDigitsInAYDigitNumberWithGreatestProduct(4, 1000),
    xAdjacentDigitsInAYDigitNumberWithGreatestProduct(13, 1000)
) */
