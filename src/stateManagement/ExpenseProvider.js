import React, { createContext, useState } from 'react'

export const ExpenseContext = createContext()

const ExpenseProvider = (props) => {


  const [transaction, setTransaction] = useState([])

  const addTransaction = ({ title, amount , role}) => {

    const id = Math.floor(Math.random() * 1000)
    // localStorage.setItem('transactions', JSON.stringify(transaction) 
    setTransaction([...transaction, {id, title, amount, role}])
  }


  return (<ExpenseContext.Provider value={{ addTransaction , transaction }}>{props.children}</ExpenseContext.Provider>)
}

export default ExpenseProvider
