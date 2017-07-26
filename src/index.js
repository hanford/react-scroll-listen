import React, { PureComponent } from 'react'

import window from 'global/window'
import document from 'global/document'

export default class ScrollListener extends PureComponent {
  state = {
    scroll: 0
  }

  componentDidMount () {
    this.setState({scroll: document.body.scrollTop})

    window.addEventListener('scroll', this.recordPosition)
  }

  componentWillUnMount () {
    window.removeEventListener('scroll', this.recordPosition)
  }

  recordPosition = event => {
    const { onScroll } = this.props
    const { target: { body: { scrollTop } } } = event

    const scroll = Number(scrollTop / 1.5)

    onScroll(scroll, event)
    this.setState({ scroll })
  }

  render () {
    return null
  }
}
