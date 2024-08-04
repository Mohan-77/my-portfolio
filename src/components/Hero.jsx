import React from 'react'

const Hero = () => {
  return (
    <div className="showcase" id='showcase'>
        <div className="container">
            <div className="showcase-content flex-content container">
                <div className="left">
                    <span className="subtitle">MY GOAL</span>
                    <h1 className="title">
                        Putting <span className="color">Any 
                        Idea</span> To Action 
                    </h1>
                    <p>My journey as a web developer and designer is a story of 
                        continuous learning and exploration. Here, you'll find a 
                        curated collection of my projects that showcase my 
                        expertise in web development, responsive design, and 
                        user interface. </p>
                    <a href="#contact" className="btn">Contact me</a>
                </div>
                <div className="right">
                    <img src="images/cade.jpeg"   alt="" />
                </div>
            </div>
        </div>
        <div className="shape"></div>
    </div>
  )
}

export default Hero