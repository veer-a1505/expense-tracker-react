import React from 'react'

const TransactionForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Add Transaction'></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default TransactionForm
