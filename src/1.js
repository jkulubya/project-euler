function run(max, sum = 0) {
    let current = max - 1;
    if (current <= 0) {
        return sum;
    }

    if (current % 5 == 0 || current % 3 == 0) {
        return run(max - 1, sum + current)
    } else {
        return run(max - 1, sum)
    }
}

console.log(run(10))
console.log(run(1000))
