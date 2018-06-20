import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import poster from '../images/poster.jpg'

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
                    id="midya"
                    className={`${
                        this.props.article === 'midya' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Kamalayan Midya Project 2018</h2>

                    {this.state.isLightboxOpen && (
                        <Lightbox
                            mainSrc={'https://i.imgur.com/hrfQAZA.jpg'}
                            onCloseRequest={() => {
                                this.setState({ isLightboxOpen: false })
                            }}
                        />
                    )}
                    <div
                        className="poster-img--container"
                        onClick={() => this.setState({ isLightboxOpen: true })}
                    >
                        <img
                            className="poster-img--image"
                            src={poster}
                            alt="KMP Poster"
                        />
                    </div>
                    <p>
                        The Kamalayan Youth Midya Project is a media production
                        program which includes training for radio, and tv
                        production as well as lessons of Philippine history and
                        current events in the community.
                    </p>
                    <p>
                        In the past, youth in the Kamalayan collective who
                        wanted to be involved in media were invited on a drop in
                        basis. Youth assisted in the studio and attended free
                        training from the community radio station. This project
                        idea is the result of our collective’s years of
                        experience as media volunteers. We hope to broaden the
                        Filipino youth voice by working with our partners Radyo
                        Migrante and TV Migrante.
                    </p>
                    <p>
                        The deadline for applications is June 24, 2018. We look
                        forward to hearing from you!
                    </p>
                    <div style={{ marginBottom: '20px' }}>
                        <a
                            className="button"
                            href="https://goo.gl/forms/4mosbV2stTlZGMXW2"
                            target="_blank"
                            ref="noopen"
                        >
                            Apply now
                        </a>

                        <a
                            style={{ marginLeft: '20px' }}
                            className="button"
                            href="/faq"
                            onClick={e => {
                                e.preventDefault()
                                this.props.onOpenLink('/faq')
                            }}
                        >
                            Find out more
                        </a>
                    </div>
                    {close}
                </article>

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
                        <a href="mailto:info@kamalayan.ca">info@kamalayan.ca</a>.
                        You can also find us on Facebook{' '}
                        <a
                            href="https://www.facebook.com/kamalayankonsciousness/"
                            target="_blank"
                        >
                            here
                        </a>.
                    </p>
                    <form
                        method="POST"
                        action="https://formspree.io/info@kamalayan.ca"
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
