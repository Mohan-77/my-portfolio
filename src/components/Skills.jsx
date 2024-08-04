import React from 'react'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <div className="container">
            <h1 className='heading' data-aos='flip-up'>My skills</h1>
            <div className="skill-center container">
                <div className="skill" data-aos="zoom-in">
                    <span className="icon"><i className="fab fa-js bx-tada-hover"></i></span>
                    <h4>JavaScript</h4>
                    <div className="level">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    </div>
                </div>
                <div className="skill" data-aos="zoom-in">
                    <span className="icon"><i className="fa-brands fa-react bx-tada-hover"></i></span>
                    <h4>React</h4>
                    <div className="level">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    </div>
                </div>
                <div className="skill" data-aos="zoom-in">
                    <span className="icon"><i className="fa-brands fa-css3-alt bx-tada-hover"></i></span>
                    <h4>UI Design</h4>
                    <div className="level">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    </div>
                </div>
                <div className="skill" data-aos="zoom-in">
                    <span className="icon"><i className="fa-brands fa-python bx-tada-hover"></i></span>
                    <h4>Python</h4>
                    <div className="level">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills