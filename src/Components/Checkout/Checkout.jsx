// import './Checkout.css'
// import React from 'react'

// const Checkout = () => {
//   return (
//    <>
//     <div className='all-checkout'>
//         <div className='checkout-wrapper'>
//             <div className='checkout'></div>
//         </div>
      
//     </div>
//    </>
//   )
// }

// export default Checkout

import React from 'react'
import './Checkout.css'

const Checkout = () => {
  return (
    <div>
      <div className="checkout-container">
  
  <main className="checkout-forms">
    <button className="back-btn">Back to Cart</button>
    <h1>Checkout</h1>

    <section className="form-section">
      <div className="section-header">
        <span className="step-number">1</span>
        <h2>Contact Information</h2>
      </div>
      <div className="input-grid">
        <div className="input-group">
          <label>First Name *</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="input-group">
          <label>Last Name *</label>
          <input type="text" placeholder="Doe" />
        </div>
        <div className="input-group">
          <label>Email Address *</label>
          <input type="email" placeholder="john@example.com" />
        </div>
        <div className="input-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="+234 801 234 5678" />
        </div>
      </div>
    </section>

    <section className="form-section">
      <div className="section-header">
        <span className="step-number">2</span>
        <h2>Shipping Address</h2>
      </div>
      <div className="input-group">
        <label>Street Address *</label>
        <input type="text" placeholder="123 Main Street" />
      </div>
      <div className="input-grid">
        <div className="input-group">
          <label>City *</label>
          <input type="text" placeholder="Lagos" />
        </div>
        <div className="input-group">
          <label>State *</label>
          <input type="text" placeholder="Lagos" />
        </div>
      </div>
      <div className="input-group small">
        <label>ZIP Code *</label>
        <input type="text" placeholder="100001" />
      </div>
    </section>

    <section className="form-section">
      <div className="section-header">
        <span className="step-number">3</span>
        <h2>Payment Method</h2>
      </div>
      <div className="payment-tabs">
        <button className="tab active">Credit Card</button>
        <button className="tab">Bank Transfer</button>
      </div>
      <div className="card-details">
        <div className="input-group">
          <label>Card Number</label>
          <input type="text" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="input-group">
          <label>Name on Card</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="input-grid">
          <div className="input-group">
            <label>Expiry Date</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className="input-group">
            <label>CVV</label>
            <input type="password" placeholder="***" />
          </div>
        </div>
      </div>
    </section>

    <button className="place-order-btn">Place Order</button>
  </main>

  <aside className="order-summary">
    <h3>Order Summary</h3>
    <hr />
    <div className="summary-items">
      <div className="item">
        <span>Yam-Grade B x2</span>
        <span>₦20,000</span>
      </div>
      <div className="item">
        <span>Rice - 5kg x1</span>
        <span>₦8,500</span>
      </div>
      <div className="item">
        <span>Beans - 2kg x3</span>
        <span>₦6,000</span>
      </div>
    </div>
    <hr />
    <div className="summary-totals">
      <div className="total-line">
        <span>Subtotal</span>
        <span>₦34,500</span>
      </div>
      <div className="total-line">
        <span>Delivery Fee</span>
        <span>₦1,500</span>
      </div>
      <div className="total-line">
        <span>Tax</span>
        <span>₦500</span>
      </div>
      <div className="total-line grand-total">
        <span>Total</span>
        <span>₦36,500</span>
      </div>
    </div>
    <div className="secure-badge">
      <span>✅ Secure Checkout - Your information is protected</span>
    </div>
  </aside>

</div>
    </div>
  )
}

export default Checkout
