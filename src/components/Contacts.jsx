import React from 'react'

const Contacts = () => {
  return (
    <div className='contacts-container' id='contacts'>
      <div class="container">
        <h1 className='heading'>Hire me</h1>
        <div class="contacts">
          <div class="form">
            <form>
              <input type="text" id="fname" placeholder="Enter your name" required />
              <input type="email" id="email" placeholder="Enter your email" required />
              <select name="occupation" id="occupation">
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="design">Design</option>
              </select>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div class="social-media">
            <div className='social'>
              <i class="fab fa-instagram bx-tada-hover"></i>
              <a href="https://instagram.com">Instagram</a>
            </div>
            <div className="social">
              <i class="fab fa-facebook bx-tada-hover"></i>
              <a href="https://facebook.com">Facebook</a>
            </div>
            <div className="social">
              <i class="far fa-envelope bx-tada-hover"></i>
              <a href="mailto:cadeprince981@gmail.com">Email me</a>
            </div>
            <div className="social">
              <i class="fas fa-phone bx-tada-hover"></i>
              <a href="tel:+254111252925">Call me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts