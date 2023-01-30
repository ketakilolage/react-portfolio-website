import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Cryptocurrency Dashboard and Financial Visualization',
        github: 'https://github.com/ketakilolage',
        demo: 'https://ketakilolage.github.io/'
    },
    {
        id: 2,
        image: IMG1,
        title: 'Cryptocurrency Dashboard and Financial Visualization',
        github: 'https://github.com/ketakilolage',
        demo: 'https://ketakilolage.github.io/'
    },
    {
        id: 3,
        image: IMG1,
        title: 'Cryptocurrency Dashboard and Financial Visualization',
        github: 'https://github.com/ketakilolage',
        demo: 'https://ketakilolage.github.io/'
    },
    {
        id: 4,
        image: IMG1,
        title: 'Cryptocurrency Dashboard and Financial Visualization',
        github: 'https://github.com/ketakilolage',
        demo: 'https://ketakilolage.github.io/'
    },
    {
        id: 5,
        image: IMG1,
        title: 'Cryptocurrency Dashboard and Financial Visualization',
        github: 'https://github.com/ketakilolage',
        demo: 'https://ketakilolage.github.io/'
    },
    {
        id: 6,
        image: IMG1,
        title: 'Cryptocurrency Dashboard and Financial Visualization',
        github: 'https://github.com/ketakilolage',
        demo: 'https://ketakilolage.github.io/'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target='_blank'>GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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