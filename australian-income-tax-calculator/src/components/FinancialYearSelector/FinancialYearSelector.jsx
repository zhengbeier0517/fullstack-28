import './FinancialYearSelector.css';
import Button from '../ui/Button';
import Card from '../ui/Card';

const FinancialYearSelector = ({ financialYear, onFinancialYearClick }) => (
  <Card className="financial-year-selector">
    <h2 className="financial-year-selector-title">Select Financial Year</h2>
    <div className="financial-year-selector-buttons">
      <Button variant={financialYear === 'FY 2025-26' ? 'primary' : 'secondary'} onClick={() => onFinancialYearClick('FY 2025-26')}>FY 2025-26</Button>
      <Button variant={financialYear === 'FY 2024-25' ? 'primary' : 'secondary'} onClick={() => onFinancialYearClick('FY 2024-25')}>FY 2024-25</Button>
      <Button variant={financialYear === 'FY 2023-24' ? 'primary' : 'secondary'} onClick={() => onFinancialYearClick('FY 2023-24')}>FY 2023-24</Button>
    </div>
  </Card>
);

export default FinancialYearSelector;
