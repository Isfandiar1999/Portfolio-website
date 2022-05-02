import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data =[
  {
    id:1,
    image:IMG1,
    title:"Calculator",
    github:"https://github.com/Isfandiar1999",
    demo:"https://isfandiar1999.github.io/React-calculator/"
  },
  { 
    id:2,
    image:IMG2,
    title:"To-do-list with search panel",
    github:"https://github.com/Isfandiar1999",
    demo:"https://isfandiar1999.github.io/to-do-list-react/"
  },
  {
    id:3,
    image:IMG3,
    title:"Spend money program",
    github:"https://github.com/Isfandiar1999",
    demo:"https://isfandiar1999.github.io/spend-money_react/"
  },
  {
    id:4,
    image:IMG4,
    title:"add to basket card",
    github:"https://github.com/Isfandiar1999",
    demo:"https://isfandiar1999.github.io/react-cart-basket/"
  },
  {
    id:5,
    image:IMG5,
    title:"Rockstar-game-website",
    github:"https://github.com/Isfandiar1999",
    demo:"https://isfandiar1999.github.io/rockstar/"
  },
  {
    id:6,
    image:IMG6,
    title:"Fruits",
    github:"https://github.com/Isfandiar1999",
    demo:"https://isfandiar1999.github.io/Fruits/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Hazırladığım portfolio</h5>
      <h2>App-lar</h2>

      <div className='container portfolio__container'>
          {
            data.map(({id,image, title,github, demo})=>{
              return (
                <article key={id} className='portfolio__item'>
                    <div className='portfolio__item-image'>
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn' target="_blank">Github</a>
                      <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Portfolio