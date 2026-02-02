import './TaxTable.css';
import Card from '../ui/Card';

const TAX_TABLE_FY_2025_26 = [
  {income: '$0.00 - $18,200.00', rate: 'Nil'},
  {income: '$18,201.00 - $45,000.00', rate: '16.0%'},
  {income: '$45,001.00 - $135,000.00', rate: '30.0% + $4,288.00'},
  {income: '$135,001.00 - $190,000.00', rate: '37.0% + $31,288.00'},
  {income: '$190,001.00 and above', rate: '45.0% + $51,638.00'},
];

const TAX_TABLE_FY_2024_25 = [
  {income: '$0.00 - $18,200.00', rate: 'Nil'},
  {income: '$18,201.00 - $45,000.00', rate: '16.0%'},
  {income: '$45,001.00 - $135,000.00', rate: '30.0% + $4,288.00'},
  {income: '$135,001.00 - $190,000.00', rate: '37.0% + $31,288.00'},
  {income: '$190,001.00 and above', rate: '45.0% + $51,638.00'},
];

const TAX_TABLE_FY_2023_24 = [
  {income: '$0.00 - $18,200.00', rate: 'Nil'},
  {income: '$18,201.00 - $45,000.00', rate: '19.0%'},
  {income: '$45,001.00 - $120,000.00', rate: '32.5% + $5,092.00'},
  {income: '$120,001.00 - $180,000.00', rate: '37.0% + $29,467.00'},
  {income: '$180,001.00 and above', rate: '45.0% + $51,667.00'},
];

const TAX_TABLES = {
  'FY 2025-26': TAX_TABLE_FY_2025_26,
  'FY 2024-25': TAX_TABLE_FY_2024_25,
  'FY 2023-24': TAX_TABLE_FY_2023_24,
};

const TaxTable = ({ financialYear }) => (
  <Card className="tax-table">
    <h2>Tax Rates - {financialYear}</h2>
    <table>
      <thead>
        <tr>
          <th>Taxable Income</th>
          <th>Tax Rate</th>
        </tr>
      </thead>
      <tbody>
        {TAX_TABLES[financialYear].map(({ income, rate }) => (
          <tr key={income}>
            <td>{income}</td>
            <td>{rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Card>
);

export default TaxTable;
