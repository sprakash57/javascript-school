const fast = (num) => {
    console.log(`fast task ${num} running`);
}

const slow = () => {
    const now = new Date().getTime();
    while (new Date().getTime() < now + 2000) {/*Processing */ }
    console.log('slow task running');
}

const asyncSlow = () => {
    setTimeout(() => console.log('async slow task running'), 2000);
}

fast(1);
slow();
fast(2);
asyncSlow();
fast(3);
