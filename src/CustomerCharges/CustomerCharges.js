import React from 'react'
import './CustomerCharges.css'

function CustomerCharges(props) {
  return (
    <article id='customer-charges'>
      <div className='header-container'>
      <p className='article-header'>Customer Charges</p>
      </div>
      <div className='charges-container'>
        <div className='charge-item'>
          <span>Sub-Total: </span>
          <span className='amount'>{props.state.subtotal}</span>
        </div>
        <div className='charge-item'>
          <span>Tip: </span>
          <span className='amount'>{props.state.tip}</span>
        </div>
        <hr />
        <div className='charge-item'>
          <span>Total: </span>
          <span className='amount'>{props.state.total}</span>
        </div>
      </div>
    </article>
  )
}

export default CustomerCharges
