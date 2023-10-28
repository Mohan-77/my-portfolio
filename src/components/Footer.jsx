import React from 'react'

const Footer = () => {
    let today = new Date()
    let year = today.getFullYear()
  return (
    <footer id="footer" class="footer">
        <div class="container">
            <div class="footer-container">
            <div class="footer-center">
                <h3>Location</h3>
                <div>
                    <span><i class="fa-solid fa-location-dot"></i>
                    </span>
                    Nairobi, Kenya
                </div>
            </div>
            <div class="footer-center">
                <h3>Mobile</h3>
                <div>
                    <span><i class="fa-solid fa-phone"></i>
                    </span>
                    +2541 11252925
                </div>
            </div>
            <div class="footer-center">
                <h3>My social media</h3>
                <div>
                    <span><i class="fa-solid fa-paper-plane"></i>
                    </span>
                    @whatsapp/name
                </div>
            </div>
            <div class="footer-center">
                <h3>Contact me</h3>
                <div>
                    <span><i class="fa-solid fa-envelope"></i>
                    </span>
                    Company@gmail.com
                </div>
            </div>
        </div>
        </div>
        <div className='copyrights'>
            <div className="container">
                <p>&copy; Copyrights, {year}. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer