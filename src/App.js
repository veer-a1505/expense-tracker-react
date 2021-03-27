import React from 'react'
import Header from './components/Header'
import AmountContainer from './components/AmountContainer'
import TransactionList from './components/TransactionList'
import TransactionForm from './components/TransactionForm'

function App() {
  return (
    <div>
      <Header />
      <AmountContainer />
      <TransactionList />
      <TransactionForm />
    </div>
  )
}

export default App
