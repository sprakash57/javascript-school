/*<----single passing --------------> */
const calculate = (x, y, compute) => {
    return compute(x, y);
}

const mod = (a, b) => a % b;

const mul = calculate(10, 5, (a, b) => a * b); //anonymous callbacks
const add = calculate(10, 5, (a, b) => a + b);
const calculateMod = calculate(10, 5, mod); //named callbacks

const someMothod = (a, b, next) => {
    console.log(`inserted ${a} and ${b}`);
    next(a, b);
}

someMothod(10, 5, (a, b) => {
    console.log(`result is`, a - b)
});

// console.log(calculateMod);

/*<--- continuous passing style---->*/

const cps = (x, callback) => {
    callback(x);
}

cps(10, x => {
    let result = x * x;
    cps(result, x => {
        let result2 = x + x;
        cps(result2, x => {
            let answer = x + 100;
            console.log(answer);
        })
    })
});