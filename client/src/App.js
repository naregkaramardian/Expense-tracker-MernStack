import React from 'react';
import './App.css';
import  {Header} from './components/header/header.component.jsx'
import {Balance} from './components/balance/balance.component.jsx'
import {IncomeExpenses} from './components/incomeExpenses/incomeExpenses.component'
import {TransactionList}  from './components/transactionList/transactionList.components'
import {AddTransaction} from './components/addTransaction/addTransaction.components'

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
          <Balance />
          <IncomeExpenses /> 
          <TransactionList />
          <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
