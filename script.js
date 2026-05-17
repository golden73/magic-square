function getBoardValues() {
    const ids = ['1', '2', '3', '4', '6', '7', '8', '9'];
    const values = ids.map(id => parseInt(document.getElementById(id).value) || 0);
    
    //Placing 5 between 4 and 6
    values.splice(4, 0, 5); 
    return values;
}

function start() {
    const v = getBoardValues();
    const resultSpan = document.getElementById('display');

    // Unique number Check (1-9)
    const uniqueNumbers = new Set(v.filter(num => num >= 1 && num <= 9));

    // Sum Calculations
    const r1 = v[0] + v[1] + v[2];
    const r2 = v[3] + v[4] + v[5];
    const r3 = v[6] + v[7] + v[8];
    const c1 = v[0] + v[3] + v[6];
    const c2 = v[1] + v[4] + v[7];
    const c3 = v[2] + v[5] + v[8];
    const d1 = v[0] + v[4] + v[8];
    const d2 = v[2] + v[4] + v[6];

    const all15 = [r1, r2, r3, c1, c2, c3, d1, d2].every(sum => sum === 15);

    // Validation Logic
    if (all15 && uniqueNumbers.size === 9) {
        resultSpan.innerHTML = "Success! The Magic is real.";
        resultSpan.style.color = "#2ecc71";
    } else if (uniqueNumbers.size < 9) {
        resultSpan.innerHTML = "Numbers must be unique (1-9).";
        resultSpan.style.color = "#f1c40f";
    } else {
        resultSpan.innerHTML = "Incorrect sums. Keep trying!";
        resultSpan.style.color = "#e74c3c";
    }
}

function Reset() {
    const ids = ['1', '2', '3', '4', '6', '7', '8', '9'];
    ids.forEach(id => {
        document.getElementById(id).value = "";
    });

    const resultSpan = document.getElementById('display');
    resultSpan.innerHTML = "";
}
