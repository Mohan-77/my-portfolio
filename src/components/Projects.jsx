import React from 'react'

const Projects = () => {
  return (
      <section className="projects-container" id='projects'>
        <div className="container">
          <h1 className='heading' data-aos='flip-down'>projects</h1>
            <div className="projects">
              <div className="project">
                  <div className="img-cover">
                      <img src="images/ecommerce.png" alt="image" />
                  </div>
                  <div className="visit">
                    <h3>E commerce</h3>
                    <a href="#" className="visit-link">Check it</a>
                  </div>
              </div>
              <div className="project">
                <div className="img-cover">
                    <img src="images/university.png" alt="image" />
                </div>
                <div className="visit">
                  <h3>Univesity</h3>
                  <a href="#" className="visit-link">Check it</a>
                </div>
              </div>
            <div className="project">
              <div className="img-cover">
                  <img src="images/restaurant.png" alt="image" />
              </div>
              <div className="visit">
                <h3>Restaurant</h3>
                  <a href="#" className="visit-link">Check it</a>
              </div>
            </div>
            <div className="project">
              <div className="img-cover">
                  <img src="images/webdesign.png" alt="image" />
              </div>
              <div className="visit">
                <h3>Web design</h3>
                <a href="#" className="visit-link">Check it</a>
              </div>
            </div>
            <div className="project">
              <div className="img-cover">
                  <img src="images/cafeteria.png" alt="image" />
              </div>
              <div className="visit">
                <h3>Cafeteria</h3>
                <a href="#" className="visit-link">Check it</a>
              </div>
            </div>
            <div className="project">
              <div className="img-cover">
                  <img src="images/calender.png" alt="image" />
              </div>
              <div className="visit">
                <h3>Calender</h3>
                <a href="#" className="visit-link">Check it</a>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Projects