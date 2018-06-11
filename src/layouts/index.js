import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Toolbar from '../components/Toolbar'

class Template extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: '',
            loading: 'is-loading',
            pageTimeout: false,
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleBackButtonPress = this.handleBackButtonPress.bind(this)
        this.handleOpenLink = this.handleOpenLink.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' })
        }, 100)

        document.addEventListener('keydown', this.handleKeyPress, false)
        window.addEventListener(
            'popstate',
            event => {
                if (this.props.location.pathname === '/') {
                    this.setState({
                        isArticleVisible: false,
                    })
                }
            },
            false
        )
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
        document.removeEventListener('keydown', this.handleKeyPress, false)
    }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article,
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout,
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout,
            })
        }, 350)
    }

    handleCloseArticle() {
        this.setState({
            articleTimeout: !this.state.articleTimeout,
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout,
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: '',
            })
        }, 350)
    }

    handleKeyPress(event) {
        if (
            this.state.isArticleVisible &&
            (event.key === 'Escape' || event.code === 'Escape')
        ) {
            this.handleCloseArticle()
        }
    }

    handleOpenLink(link) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
        })

        setTimeout(() => {
            this.props.history.push(link)

            this.setState({ pageTimeout: true, pageFadeInTimeOut: true })

            setTimeout(() => {
                this.setState({ pageTimeout: false, pageFadeInTimeOut: false })
            }, 10)
        }, 325)
    }

    handleBackButtonPress() {
        this.setState({
            pageTimeout: true,
            timeout: false,
        })

        setTimeout(() => {
            this.props.history.push('/')
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible: false,
                article: '',
                pageTimeout: false,
            })
        }, 350)
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description
        const { location, children } = this.props

        let rootPath = `/`
        const isAtRootPath = location.pathname === rootPath

        const isArticleVisible = !isAtRootPath || this.state.isArticleVisible

        let content

        if (isAtRootPath) {
            content = (
                <div id="wrapper">
                    <Header
                        onOpenLink={this.handleOpenLink}
                        onOpenArticle={this.handleOpenArticle}
                        timeout={this.state.timeout}
                    />
                    <Main
                        isArticleVisible={isArticleVisible}
                        timeout={this.state.timeout}
                        articleTimeout={this.state.articleTimeout}
                        article={this.state.article}
                        onCloseArticle={this.handleCloseArticle}
                    />
                    <Footer timeout={this.state.timeout} />
                </div>
            )
        } else {
            content = (
                <div
                    id="wrapper"
                    className={`page ${
                        !isAtRootPath ? 'page-with-toolbar' : ''
                    } ${this.state.pageTimeout ? 'page-timeout' : ''} ${
                        this.state.pageFadeInTimeOut
                            ? 'page-fade-in-timeout'
                            : ''
                    }`}
                >
                    <div>
                        <div
                            style={{
                                maxWidth: '1140px',
                            }}
                        >
                            {children()}
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div
                className={`body ${this.state.loading} ${
                    isArticleVisible ? 'is-article-visible' : ''
                } ${!isAtRootPath ? 'body-with-toolbar' : ''}`}
            >
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                {content}
                {!isAtRootPath && (
                    <Toolbar onBackButtonPress={this.handleBackButtonPress} />
                )}

                <div id="bg" />
            </div>
        )
    }
}

export default Template

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
