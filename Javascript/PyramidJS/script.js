/*console.log("Let's build a pyramid using JavaScript basics:")
console.log("     #     ");
console.log("    ###    ");
console.log("   #####   ");
console.log("  #######  ");
console.log(" ######### ");*/

const character = "#";
const height = 8;
const rows = [];
let inverted = true;

function buildPyramid(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i =1; i <= height; i++) {
    if (inverted) {
        rows.unshift(buildPyramid(i, height));
    } else {
        rows.push(buildPyramid(i, height));
    }
}

let result = "";

for (const row of rows) {
    result = result + row + "\n";
}

console.log(result);