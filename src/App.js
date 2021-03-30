import React from 'react'
import Header from './component/Header'
import TransactionList from './component/TransactionList'
import TransactionForm from './component/TransactionForm'
import AmountContainer from './component/AmountContainer'

function App() {
  return (
    <div className='container'>
      <Header />
      <AmountContainer />
      <TransactionList />
      <TransactionForm />
    </div>
  )
}

export default App
