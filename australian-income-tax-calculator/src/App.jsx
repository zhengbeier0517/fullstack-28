import { useState } from 'react';
import './App.css';
import Disclaimer from './components/Disclaimer';
import FinancialYearSelector from './components/FinancialYearSelector';
import Header from './components/Header';
import TaxCalculator from './components/TaxCalculator';
import TaxTable from './components/TaxTable';

function App() {
  const [financialYear, setFinancialYear] = useState('FY 2025-26');

  return (
    <div className="page">
      <div className="container">
        <header>
          <Header />
        </header>
        <main>
          <section>
            <FinancialYearSelector financialYear={financialYear} onFinancialYearClick={setFinancialYear} />
          </section>
          <section className="grid">
            <TaxTable financialYear={financialYear} />
            <TaxCalculator financialYear={financialYear} />
          </section>
        </main>
        <footer>
          <Disclaimer />
        </footer>
      </div>
    </div>
  );
}

export default App;
