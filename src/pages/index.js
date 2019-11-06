import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Lightbox from 'react-images'
import { Link } from 'gatsby'
// import Gallery from '../components/Gallery'

import cover from '../assets/images/thumbs/pease.png'
import varlosity from '../assets/images/thumbs/varlosity.png'
// import thumb02 from '../assets/images/thumbs/02.jpg'
//
//
// import full01 from '../assets/images/fulls/01.jpg'
// import full02 from '../assets/images/fulls/02.jpg'
//
//
// const DEFAULT_IMAGES = [
//     { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//     { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
// ];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Personal Page of Brian Wong"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>I am a technology enthusiast. Previously trained as a lawyer, looking to get into the product field.</h2>
                        </header>
                        <p>
                          T-shaped person with experience in engineering and design. Previous experience in startups and legal world. Comfortable with work in international settings.
                        </p>
                        <p>
                          While I am not working, I am probably reading in a coffee shop or sketching in the street.
                        </p>
                    </section>

                    <section id="two">
                      <h2> Skills </h2>
                      <ul>
                        <li><i class="icon fa-language"></i> <b>Languages:</b> Cantonese, English, Madarin Chinese, Spanish, Japanese</li>
                        <li><i class="icon fa-toolbox"></i><b>Skills:</b> Legal, Sketch, Wordpress, Javascript, HTML, CSS</li>
                        <li><b>Education:</b> Bachelor of Business and Bachelor of Law, University of Hong Kong </li>
                      </ul>
                    </section>

                    <section id="three">
                    <h2>Recent Work</h2>
                    <div className="row">
                        <article className="6u 12u$(xsmall) work-item" key="a">
                            <Link
                                className="image fit thumb"
                                to={'/pease'}
                            >
                                <img src={cover} />
                            </Link>
                            <h3>Pease</h3>
                            <p>Web application for will drafting</p>
                        </article>
                        <article className="6u 12u$(xsmall) work-item" key="a">
                            <Link
                                className="image fit thumb"
                                to={'/varlosity'}
                            >
                                <img src={varlosity} />
                            </Link>
                            <h3>Varlosity</h3>
                            <p>Startup pre-incubator</p>
                        </article>
                        </div>
                    </section>

                    <section id="four">
                        <h2>Get In Touch</h2>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        (852)96307221
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">brian.wongst@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
