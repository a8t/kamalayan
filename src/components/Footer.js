import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <p className="copyright">
            &copy; Kamalayan. Image:{' '}
            <a href="http://hannah.ph">Hannah Reyes Morales</a>.
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool,
}

export default Footer
