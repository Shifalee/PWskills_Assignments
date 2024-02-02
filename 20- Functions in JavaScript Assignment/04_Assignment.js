/*Write a javascript function called calculateTax that takes an income as an argument and returns the amount of tax to be paid.Use a closure to handle different tax rate based on income ranges ,Test the function with various income.*/

function calculateTax() {
    const taxRates = [
      { range: 10000, rate: 0.1 },
      { range: 30000, rate: 0.15 },
      { range: 60000, rate: 0.2 },
      { range: Infinity, rate: 0.25 }
    ];
  
    return function(income) {
      let tax = 0;
  
      for (const { range, rate } of taxRates) {
        if (income <= range) {
          tax += income * rate;
          break;
        } else {
          tax += range * rate;
          income -= range;
        }
      }
  
      return tax;
    };
  }
  
  const calculateTaxForIncome = calculateTax();
  const income1 = 8000;
  const income2 = 25000;
  const income3 = 50000;
  const income4 = 75000;
  
  console.log(`Tax for $${income1}: $${calculateTaxForIncome(income1)}`);
  console.log(`Tax for $${income2}: $${calculateTaxForIncome(income2)}`);
  console.log(`Tax for $${income3}: $${calculateTaxForIncome(income3)}`);
  console.log(`Tax for $${income4}: $${calculateTaxForIncome(income4)}`);
  