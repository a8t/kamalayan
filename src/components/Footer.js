import React from 'react'

const Footer = props => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <p className="copyright">
            &copy; Kamalayan. Image:{' '}
            <a href="http://hannah.ph">Hannah Reyes Morales</a>.
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool,
}

export default Footer
