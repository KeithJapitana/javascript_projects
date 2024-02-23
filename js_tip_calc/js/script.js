const bill = 70;

const mintipCalc = 0.15;
const maxtipCalc = 0.2;

const minValue = 50;
const midValue = 300;

const minTip =
  bill >= minValue && bill <= midValue
    ? bill * mintipCalc.toFixed(2) + " (15% of the total bill)"
    : bill * maxtipCalc.toFixed(2) + " (20% of the total bill)";

console.log(`The total bill was ${bill}, the tip was ${minTip}`);
