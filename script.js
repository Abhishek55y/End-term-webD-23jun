function calculateFactorial() {
    let n = parseInt(document.getElementById("num").value);

    if (n < 0 || isNaN(n)) {
        document.getElementById("result").innerHTML =
            "Please enter a valid non-negative number.";
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    document.getElementById("result").innerHTML =
        `Factorial of ${n} = ${factorial}`;
}
