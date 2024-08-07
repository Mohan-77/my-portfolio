import React from 'react'
const About = () => {
  return (
    <section className="about" id='about'>
        <div className="container">
          <div className="about-container">
            <div className="about-image" data-aos="fade-left">
              <img src="images/cade.PNG" alt />
            </div>
            <div class="about-text" data-aos="fade-right">
                <h2>Mohamed Abdi</h2>
                <p>Welcome to my portfolio! I'm a web developer and designer 
                  passionate about creating beautiful and functional websites. 
                  With a background in web design and web development, I'm dedicated to turning ideas into stunning online experiences. I believe in the power of design to connect with users and make a lasting impression. Let's work together to bring your digital dreams to life.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About