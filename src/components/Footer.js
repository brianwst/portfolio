import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.twitter.com/Brian_wongst" target="blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://www.github.com/brianwst" target="blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/brian-wong-41b85492" target="blank" className="icon fa-linkedin"><span className="label">Dribbble</span></a></li>
                        <li><a href="https://www.medium.com/@brianwong_75841" target="blank" className="icon fa-medium"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Powered by <a href="https://www.gatsbyjs.org">Gatsby</a></li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
