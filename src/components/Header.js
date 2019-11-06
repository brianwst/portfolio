import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Footer from './Footer';
import avatar from '../assets/images/profile.jpeg';

const Header = () => {
      const data = useStaticQuery(
          graphql`
            query siteMetadata {
              site {
                siteMetadata {
                  author
                }
              }
            }
          `
      )
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>This is a super simple<br />
                    personal page of<br />
                    <strong>{data.site.siteMetadata.author}</strong>
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }

export default Header
