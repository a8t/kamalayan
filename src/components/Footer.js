import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styleVariables from './styleVariables.json'

const FooterContainer = styled.footer`
    display: ${props => (props.timeout ? 'none' : '')};
    transition: transform ${styleVariables.duration.article} ease-in-out,
        filter ${styleVariables.duration.article} ease-in-out,
        opacity ${styleVariables.duration.article} ease-in-out;
    width: 100%;
    max-width: 100%;
    margin-top: 2rem;
    text-align: center;

    .copyright {
        letter-spacing: _font(letter-spacing);
        font-size: 0.6rem;
        opacity: 0.75;
        margin-bottom: 0;
        text-transform: uppercase;
    }

    .body.is-article-visible & {
        transform: scale(0.95);
        filter: blur(0.1rem);
        opacity: 0;
    }

    .body.is-loading & {
        opacity: 0;
    }
`

const Footer = props => (
    <FooterContainer timeout={props.timeout}>
        <p className="copyright">
            &copy; Kamalayan. Image:{' '}
            <a href="http://hannah.ph">Hannah Reyes Morales</a>.
        </p>
    </FooterContainer>
)

Footer.propTypes = {
    timeout: PropTypes.bool,
}

export default Footer
