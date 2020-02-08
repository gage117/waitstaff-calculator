import React from 'react'
import './MyEarningsInfo.css'

function MyEarningsInfo(props) {
  return (
    <article id='my-earnings-info'>
      <div className='header-container'>
      <p className='article-header'>My Earnings Info</p>
      </div>
      <div className='earnings-container'>
        <div className='earning-item'>
          <span>Tip Total: </span>
          <span className='amount'>{props.state.tipTotal}</span>
        </div>
        <div className='earning-item'>
          <span>Meal Count: </span>
          <span className='amount'>{props.state.mealCount}</span>
        </div>
        <hr />
        <div className='earning-item'>
          <span>Average Tip Per Meal: </span>
          <span className='amount'>{props.state.averageTip}</span>
        </div>
      </div>
    </article>
  )
}

export default MyEarningsInfo
