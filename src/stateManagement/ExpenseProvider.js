import React, { createContext, useState } from 'react'

export const ExpenseContext = createContext()

const ExpenseProvider = (props) => {


  const [transaction, setTransaction] = useState([])

  const addTransaction = ({ title, amount , role}) => {

    const id = Math.floor(Math.random() * 1000)
    amount = Number(amount)
    // localStorage.setItem('transactions', JSON.stringify(transaction) 
    setTransaction([...transaction, {id, title,  amount, role}])
  }

  const getBalance = () => {
    let amounts = transaction.map((value) => value.amount)
    let totalBalance = amounts.reduce((acc,cur) => acc + cur,0)
    return totalBalance.toFixed(2)
  }

  const getTotalIncome = () => {
    const amountWithRole = transaction.map(trans => trans.role === 'income' ? trans.amount : null)
    const totalIcnome = amountWithRole.reduce((acc,cur) => acc + cur, 0)
    return totalIcnome.toFixed(2)
  }

  const getTotalExpense = () => {
    const amountWithRole = transaction.map((trn) => trn.role === 'expense' ? trn.amount : null)
    const totalExpense = amountWithRole.reduce((acc,cur) => acc + cur,0)

    return totalExpense.toFixed(2)
  }

  const removeTransaction = (id) => {
    const updatedTransactions = transaction.filter(trn => trn.id !== id)
    setTransaction([...updatedTransactions])
  }  

 
  return (<ExpenseContext.Provider value={{ addTransaction , transaction, getBalance , getTotalIncome , getTotalExpense , removeTransaction}}>{props.children}</ExpenseContext.Provider>)
}

export default ExpenseProvider
