import './App.css';
import React, { useState } from 'react';

function HomePage() {
  const [financialOverview, setFinancialOverview] = useState({
    income: 0,
    expenses: 0,
  });
  return (
    <div>
      <h1>Domovská Stránka</h1>
      <FinancialOverview data={financialOverview} />
    </div>
  );
}
function FinancialOverview({ data }) {
  return (
    <div>
      <h2>Přehled Financí</h2>
      <p>Příjmy: {data.income}</p>
      <p>Výdaje: {data.expenses}</p>
      {}
    </div>
  );
}
function IncomeExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  return (
    <div>
      <h1>Sledování Příjmů a Výdajů</h1>
      {}
      {}
      {}
    </div>
  );
}
function VATCalculator() {
  return (
    <div>
      <h1>Výpočet DPH</h1>
      {}
    </div>
  );
}
function CurrencyConverter() {
  return (
    <div>
      <h1>Převod Měn</h1>
      {}
    </div>
  );
}
function SavingsInvestmentCalculator() {
  return (
    <div>
      <h1>Kalkulačka spoření/investic</h1>
      {}
    </div>
  );
}
function LoginWindow() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Přihlašovací údaje:', username, password);
  };
  return (
    <div>
      <h1>Okénko na přihlášení</h1>
      <input type="text" placeholder="Uživatelské jméno" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Heslo" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Přihlásit</button>
    </div>
  );
}
function App() {
  return (
    <div>
      <HomePage />
      <IncomeExpenseTracker />
      <VATCalculator />
      <CurrencyConverter />
      <SavingsInvestmentCalculator />
      <LoginWindow />
    </div>
  );
}
export default App;