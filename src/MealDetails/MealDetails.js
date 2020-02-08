import React from 'react'
import './MealDetail.css'

function MealDetails(props) {
  return (
    <article>
      <div className='header-container'>
       <p className='article-header'>Enter the Meal Details</p>
      </div>
      <form className='meal-details' onSubmit={props.handleSubmit}>
        <label htmlFor='base-price'>
          <span>Base Meal Price: $</span>
          <div className='input-container'>
            <input id='base-price' type='text'/>
          </div>
        </label>
        <label htmlFor='tax-rate'>
          <span>Tax Rate: %</span>
          <div className='input-container'>
            <input id='tax-rate' type='text'/>
          </div>
        </label>
        <label htmlFor='tip-percentage'>
          <span>Tip Percentage: %</span>
          <div className='input-container'>
            <input id='tip-percentage' type='text'/>
          </div>
        </label>
        <div className='button-container'>
          <button type='submit'>Submit</button>
          <button type='button'>Cancel</button>
        </div>
      </form>
    </article>
  )
}

export default MealDetails
