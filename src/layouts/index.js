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
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' })
        }, 100)

        document.addEventListener('keydown', this.handleKeyPress, false)
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

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description
        const { location, children } = this.props

        let rootPath = `/`
        const isAtRootPath = location.pathname === rootPath

        let content

        if (isAtRootPath) {
            content = (
                <div id="wrapper">
                    <Header
                        onOpenArticle={this.handleOpenArticle}
                        timeout={this.state.timeout}
                    />
                    <Main
                        isArticleVisible={this.state.isArticleVisible}
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
                    }`}
                >
                    <Toolbar />
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
                    this.state.isArticleVisible ? 'is-article-visible' : ''
                } ${!isAtRootPath ? 'body-with-toolbar' : ''}`}
            >
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                {content}

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
