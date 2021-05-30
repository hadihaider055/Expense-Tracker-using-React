import React, { useContext } from 'react'
import '../App.css'
import { TransactionContext } from './transContext'
// import {TransactionContext} from './transContext'
export const History = () => {
  let {transactions} = useContext(TransactionContext)

    return (
        <div>
            <h3>History</h3>
            <hr />
            <ul>
            {transactions.map((transObj)=>(
                <li className="Item" key={transObj.id}>
                    <h3>{transObj.description}</h3>
                    <h3>{transObj.amount}</h3>
                </li>
            ))}
         
            </ul>
        </div>
    )
}
