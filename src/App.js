import React from 'react'
import Header from './component/Header'
import TransactionList from './component/TransactionList'
import TransactionForm from './component/TransactionForm'
import AmountContainer from './component/AmountContainer'
import ExpenseProvider from './stateManagement/ExpenseProvider'
import Balance from './component/Balance'

function App() {
  return (

    <div className='container'>
      <ExpenseProvider>
        <Header />
        <Balance />
        <AmountContainer />
        <TransactionList />
        <TransactionForm />
      </ExpenseProvider>
    </div>
  )
}

export default App
