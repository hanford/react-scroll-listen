import React, { PureComponent } from 'react'

import window from 'global/window'
import document from 'global/document'

export default class ScrollListener extends PureComponent {

  state = {
    scroll: 0,
    element: this.props.element || document.body,
    container: this.props.container || window
  }

  componentDidMount () {
    const { element, container } = this.state

    this.setState({scroll: element.scrollTop})

    container.addEventListener('scroll', this.recordPosition)
  }

  componentWillUnMount () {
    const { container } = this.props

    container.removeEventListener('scroll', this.recordPosition)
  }

  recordPosition = event => {
    const { onScroll } = this.props

    let scrollTop

    if (event.target === document) {
      scrollTop = event.target.body.scrollTop
    } else {
      scrollTop = event.target.scrollTop
    }

    onScroll(scrollTop, event)
    this.setState({ scroll: scrollTop })
  }

  render () {
    return null
  }
}
