import { useState } from 'react';
import './TaxCalculator.css';
import Button from '../ui/Button';
import Card from '../ui/Card';

const TAX_TABLE_FY_2025_26 = [
  {min: 0, max: 18200, base: 0, rate: 0},
  {min: 18201, max: 45000, base: 0, rate: 0.16},
  {min: 45001, max: 135000, base: 4288, rate: 0.3},
  {min: 135001, max: 190000, base: 31288, rate: 0.37},
  {min: 190001, max: Infinity, base: 51638, rate: 0.45},
];

const TAX_TABLE_FY_2024_25 = [
  {min: 0, max: 18200, base: 0, rate: 0},
  {min: 18201, max: 45000, base: 0, rate: 0.16},
  {min: 45001, max: 135000, base: 4288, rate: 0.3},
  {min: 135001, max: 190000, base: 31288, rate: 0.37},
  {min: 190001, max: Infinity, base: 51638, rate: 0.45},
];

const TAX_TABLE_FY_2023_24 = [
  {min: 0, max: 18200, base: 0, rate: 0},
  {min: 18201, max: 45000, base: 0, rate: 0.19},
  {min: 45001, max: 120000, base: 5092, rate: 0.325},
  {min: 120001, max: 180000, base: 29467, rate: 0.37},
  {min: 180001, max: Infinity, base: 51667, rate: 0.45},
];

const TAX_TABLES = {
  'FY 2025-26': TAX_TABLE_FY_2025_26,
  'FY 2024-25': TAX_TABLE_FY_2024_25,
  'FY 2023-24': TAX_TABLE_FY_2023_24,
};

const calculateTax = (taxTable, income) => {
  const bracket = taxTable.find(({ min, max }) => income >= min && income <= max);
  if (!bracket) return NaN;
  const tax = bracket.base + (income - bracket.min) * bracket.rate;
  return tax;
};

const TaxCalculator = ({ financialYear }) => {
  const [incomeInput, setIncomeInput] = useState('');
  const [income, setIncome] = useState(NaN);
  const tax = calculateTax(TAX_TABLES[financialYear], income);
  const netIncome = income - tax;
  const effectiveTaxRate = tax / income * 100;

  return (
    <Card className="tax-calculator">
      <h2>Calculate Tax</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        setIncome(Number(incomeInput));
      }}>
        <div>
          <label htmlFor="income">Annual Taxable Income</label>
          <div className="input-container">
            <span>$</span>
            <input
              type="number"
              id="income"
              name="income"
              placeholder="Enter your income"
              min="0"
              step="0.01"
              onChange={(event) => setIncomeInput(Number(event.target.value))}
            />
          </div>
        </div>
        <Button type="submit" variant="success">Calculate Tax</Button>
      </form>
      <div className="result">
        <h3>Results</h3>
        <div className="result-details">
          <div>
            <span>Taxable Income:</span>
            <span>${income}</span>
          </div>
          <div>
            <span>Income Tax:</span>
            <span>${tax}</span>
          </div>
          <div>
            <span>Net Income:</span>
            <span>${netIncome}</span>
          </div>
          <div>
            <span>Effective Tax Rate:</span>
            <span>{effectiveTaxRate.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TaxCalculator;
