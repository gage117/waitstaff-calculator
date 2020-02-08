import React from 'react';
import MealDetails from './MealDetails/MealDetails'
import CustomerCharges from './CustomerCharges/CustomerCharges'
import MyEarningsInfo from './MyEarningsInfo/MyEarningsInfo'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      subtotal: 0,
      tip: 0,
      total: 0,
      tipTotal: 0,
      mealCount: 0,
      averageTip: 0
       
    }
  }

  calculateEarnings = () => {
    const subtotal = this.state.subtotal
    this.setState({
      subtotal: subtotal + 50
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const basePrice = document.getElementById('base-price').value
    const taxRate = document.getElementById('tax-rate').value
    const tipPercentage = document.getElementById('tip-percentage').value
    const subtotal = Math.ceil(((taxRate/100 + 1) * basePrice) * 100) / 100
    const tip = Math.ceil(((tipPercentage/100) * basePrice) * 100) / 100
    const tipTotal = this.state.tipTotal + tip
    const mealCount = this.state.mealCount + 1
    this.setState({
      subtotal: subtotal,
      tip: tip,
      total: subtotal + tip,
      tipTotal: tipTotal,
      mealCount: mealCount,
      averageTip: tipTotal/mealCount
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Waitstaff Calculator</h1>
        </header>
        <main className='body-container'>
          <MealDetails handleSubmit={this.handleSubmit}/>
          <section className='calulator-container'>
            <CustomerCharges state={this.state} />
            <MyEarningsInfo state={this.state} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
