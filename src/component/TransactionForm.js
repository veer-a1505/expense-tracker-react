import React from 'react'

const TransactionForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input type='text' placeholder='Add Title'></input>
      <input type='number' placeholder='Enter Amount'></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default TransactionForm
