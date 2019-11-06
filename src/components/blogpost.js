import React from 'react'

const blogPost = (props) => {
  return (
    <div>
      <section id="one">
          <header className="major">
              <h2>{props.title}</h2>
          </header>
          <div className="content" dangerouslySetInnerHTML={{__html: props.content}}></div>
          <ul className="actions">
              <li><a className="button">Learn More</a></li>
          </ul>
      </section>
    </div>
  )
}

export default blogPost
