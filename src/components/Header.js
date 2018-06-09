import React from 'react'
import ka from '../images/ka.svg'

const Header = props => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <img src={ka} alt="" />
        </div>
        <div className="content">
            <div className="inner">
                <h1 className="title">Kamalayan</h1>
                <h1 className="subtitle">Konsciousness</h1>
                <p>A journey into responsible filipino-ness</p>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenArticle('about')
                        }}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenArticle('midya')
                        }}
                    >
                        Midya Project 2018
                    </a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenArticle('contact')
                        }}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool,
}

export default Header
