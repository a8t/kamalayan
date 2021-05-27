import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
let Lightbox
if (typeof window !== `undefined`) {
    Lightbox = require('react-image-lightbox').default
}
import 'react-image-lightbox/style.css'
import Img from 'gatsby-image'
import poster from '../images/poster.png'

class Main extends React.Component {
    state = {
        isLightboxOpen: false,
    }

    render() {
        let close = (
            <div
                className="close"
                onClick={() => {
                    this.props.onCloseArticle()
                }}
            />
        )

        const applicationURL =
            'https://docs.google.com/forms/d/1I73zEWzUlrjvWL4LD6kuhHg0DzZQs5MnABVgnI2gl7o/edit'

        return (
            <div
                id="main"
                style={
                    this.props.timeout
                        ? { display: 'flex' }
                        : { display: 'none' }
                }
            >
                <article
                    id="about"
                    className={`${
                        this.props.article === 'about' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">About</h2>
                    <p>
                        Kamalayan means “awareness” or “consciousness” in
                        Filipino. We aim to uplift and inform young people so
                        that they may move forward responsibly, conscious of
                        their power and their crucial role in creating change.
                        Kamalayan’s regular workshops and events take a critical
                        look at Philippine history, culture, and current events
                        to encourage, dialogue, awareness and consciousness as a
                        foundation for youth empowerment.
                    </p>
                    <p>We are based in Toronto, Canada.</p>
                    {close}
                </article>

                <article
                    id="contact"
                    className={`${
                        this.props.article === 'contact' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Contact</h2>
                    <p>
                        If you'd like to get in touch, you can fill out the form
                        below, or shoot us an email at{' '}
                        <a href="mailto:kmlynkonscious@gmail.com">
                            kmlynkonscious@gmail.com
                        </a>
                        . You can also find us on Facebook{' '}
                        <a
                            href="https://www.facebook.com/kamalayankonsciousness/"
                            target="_blank"
                        >
                            here
                        </a>
                        .
                    </p>
                    <form
                        method="POST"
                        action="https://formspree.io/kmlynkonscious@gmail.com"
                    >
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="4" />
                        </div>
                        <ul className="actions">
                            <li>
                                <input
                                    type="submit"
                                    value="Send Message"
                                    className="special"
                                />
                            </li>
                            <li>
                                <input type="reset" value="Reset" />
                            </li>
                        </ul>
                    </form>
                    {close}
                </article>
            </div>
        )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
}

export default Main
