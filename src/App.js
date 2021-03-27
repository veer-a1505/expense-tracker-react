import React from 'react'
import Header from './component/Header'
import AmountContainer from './component/AmountContainer'
import TransactionList from './component/TransactionList'
import TransactionForm from './component/TransactionForm'

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
