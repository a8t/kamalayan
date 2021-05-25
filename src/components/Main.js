import React from 'react'
import PropTypes from 'prop-types'
let Lightbox
if (typeof window !== `undefined`) {
    Lightbox = require('react-image-lightbox').default
}
import 'react-image-lightbox/style.css'
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
                    id="midya"
                    className={`${
                        this.props.article === 'midya' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Kultura at Kamalayan 2020</h2>
                    {this.state.isLightboxOpen && (
                        <Lightbox
                            mainSrc={poster}
                            onCloseRequest={() => {
                                this.setState({ isLightboxOpen: false })
                            }}
                        />
                    )}
                    <div
                        onClick={() => this.setState({ isLightboxOpen: true })}
                    ></div>
                    <p style={{ paddingTop: 32 }}>
                        <b>Kultura at Kamalayan Arts Week</b> is a free program
                        for Filipino youth aged 13-29 that explores art-making
                        as well as Philippine history and current events. Learn
                        how to paint, write songs, create poetry, and much more
                        while learning about your Filipino roots.
                    </p>
                    <p>
                        If you’re in high school, it’s also a great opportunity
                        to earn your volunteer hours!
                    </p>
                    <p>Lunch and refreshments will be provided.</p>
                    <p>
                        10am - 3pm
                        <br />
                        Monday, March 16, 2020 - Friday, March 20, 2020
                        <br />
                        Migrants Resource Center Canada
                        <br />
                        2482 Dufferin St, Unit 207
                    </p>
                    <div style={{ marginBottom: '20px' }}>
                        <a
                            className="button"
                            href="http://bit.ly/kultura-form-2020"
                            target="_blank"
                            ref="noopen"
                        >
                            REGISTER NOW
                        </a>

                        <a
                            style={{ marginLeft: '20px' }}
                            className="button"
                            href="http://bit.ly/kamalayan-march-break-program-2020"
                        >
                            FIND OUT MORE
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
