import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
    duration,
    size,
    palette,
    font,
    breakpoints,
} from '../assets/styleVariables.json'

import ka from '../images/ka.svg'

const HeaderContainer = styled.header`
    display: ${props => (props.timeout ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    transition: transform ${duration.article} ease-in-out,
        filter ${duration.article} ease-in-out,
        opacity ${duration.article} ease-in-out;
    background-image: -moz-radial-gradient(
        rgba(0, 0, 0, 0.25) 25%,
        rgba(0, 0, 0, 0) 55%
    );
    background-image: -webkit-radial-gradient(
        rgba(0, 0, 0, 0.25) 25%,
        rgba(0, 0, 0, 0) 55%
    );
    background-image: -ms-radial-gradient(
        rgba(0, 0, 0, 0.25) 25%,
        rgba(0, 0, 0, 0) 55%
    );
    background-image: radial-gradient(
        rgba(0, 0, 0, 0.25) 25%,
        rgba(0, 0, 0, 0) 55%
    );
    max-width: 100%;
    text-align: center;
    > * {
        transition: opacity ${duration.article} ease-in-out;
        position: relative;
        margin-top: 3.5rem;
        &:before {
            content: '';
            display: block;
            position: absolute;
            top: calc(-3.5rem - 1px);
            left: calc(50% - ${size.borderWidth} * 1);
            width: ${size.borderWidth};
            height: calc(3.5rem + 1px);
            background: ${palette.border};
        }
    }
    > :first-child {
        margin-top: 0;
        &:before {
            display: none;
        }
    }
    .logo {
        width: 5.5rem;
        height: 5.5rem;
        line-height: 5.5rem;
        border: solid ${size.borderWidth} ${palette.border};
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 50px;
            height: 50px;
        }
    }
    .content {
        border-style: solid;
        border-color: ${palette.border};
        border-top-width: ${size.borderWidth};
        border-bottom-width: ${size.borderWidth};
        max-width: 100%;
        .inner {
            transition: max-height ${duration.intro} ease,
                padding ${duration.intro} ease,
                opacity ${duration.article} ease-in-out;
            transition-delay: 0.25s;
            padding: 3rem 2rem;
            max-height: 40rem;
            overflow: hidden;
            > :last-child {
                margin-bottom: 0;
            }
            .title {
                font-size: 4rem;
            }
            .subtitle {
                margin-top: -20px;
                margin-bottom: 20px;
                font-size: 1.8rem;
                font-weight: 300;
                letter-spacing: 0.9rem;
            }
        }
        p {
            text-transform: uppercase;
            letter-spacing: ${font.letterSpacing};
            font-size: 0.8rem;
            line-height: 2;
        }
    }

    .body.is-article-visible & {
        transform: scale(0.95);
        filter: blur(0.1rem);
        opacity: 0.01;
    }
    body.is-loading &,
    .body.is-loading & {
        opacity: 0.01;

        > *,
        > *::after,
        > *::before {
            opacity: 0.01;
        }
        filter: blur(0.125rem);
        .content {
            .inner {
                max-height: 0;
                padding-top: 0;
                padding-bottom: 0;
                opacity: 0;
            }
        }
    }
    @media screen and ${breakpoints.medium} {
        .content {
            p {
                br {
                    display: none;
                }
            }
        }
    }
    @media screen and ${breakpoints.small} {
        > * {
            margin-top: 2rem;
            &:before {
                top: calc(-2rem - 1px);
                height: calc(2rem + 1px);
            }
        }
        .logo {
            width: 4.75rem;
            height: 4.75rem;
            line-height: 4.75rem;
            img {
                width: 40px;
                height: 40px;
            }
        }
        .content {
            .inner {
                padding: 2.5rem 1rem;
            }
            p {
                line-height: 1.875;
            }
        }
    }
    @media screen and ${breakpoints.xsmall} {
        padding: 1.5rem 0;

        .content {
            .inner {
                padding: 2.5rem 0;
            }
        }
    }
    @media screen and (max-width: 420px) {
        .content {
            .inner {
                padding: 2.5rem 0;
                .title {
                    font-size: 13vw;
                }
                .subtitle {
                    font-size: 7vw;
                    letter-spacing: 2vw;
                }
            }
        }
    }
`

const Nav = styled.nav`
    ul {
        display: flex;
        margin-bottom: 0;
        list-style: none;
        padding-left: 0;
        border: solid ${size.borderWidth} ${palette.border};
        border-radius: ${size.borderRadius};
        li {
            min-width: 300px;
            padding-left: 0;
            border-left: solid ${size.borderWidth} ${palette.border};
            &:first-child {
                border-left: 0;
            }
            a {
                display: block;
                min-width: 10.5rem;
                height: 2.75rem;
                line-height: 2.75rem;
                padding: 0 1.25rem 0 calc(1.25rem + ${font.letterSpacing});
                text-transform: uppercase;
                letter-spacing: ${font.letterSpacing};
                font-size: 0.8rem;
                border-bottom: 0;
                &:hover {
                    background-color: ${palette.borderBg};
                }
                &:active {
                    background-color: ${palette.borderBgAlt};
                }
            }
        }
    }
    &.use-middle {
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: calc(50% - ${size.borderWidth} * 1);
            width: ${size.borderWidth};
            height: 100%;
            background: ${palette.border};
        }
        ul {
            li {
                &.is-middle {
                    border-left: 0;
                }
            }
        }
    }

    @media screen and ${breakpoints.xlarge} {
        ul {
            li {
                min-width: 200px;
            }
        }
    }

    @media screen and ${breakpoints.medium} {
        ul {
            flex-direction: column;
            min-width: 10rem;
            max-width: 100%;
            li {
                border-left: 0;
                border-top: solid ${size.borderWidth} ${palette.border};
                &:first-child {
                    border-top: 0;
                }
                a {
                    height: 3rem;
                    line-height: 3rem;
                    min-width: 0;
                    width: 100%;
                }
            }
        }
        &.use-middle {
            &:after {
                display: none;
            }
        }
    }
`
const Header = props => (
    <HeaderContainer timeout={props.timeout}>
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
        <Nav>
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
                            props.onOpenLink('/faq')
                        }}
                    >
                        FAQ
                    </a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenLink('/links')
                        }}
                    >
                        Links
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
        </Nav>
    </HeaderContainer>
)
Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
}

export default Header
