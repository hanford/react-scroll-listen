import React, { PureComponent } from 'react'

import window from 'global/window'
import document from 'global/document'

export default class ScrollListener extends PureComponent {
  state = {
    scroll: 0,
    containerToListenOn: this.props.containerToListenOn || window,
    containerToScroll: this.props.containerToScroll || document.body
  }

  componentDidMount () {
    this.setState({scroll: this.state.containerToScroll.scrollTop})
    this.attachListener()
  }

  componentWillUnMount () {
    this.removeListener()
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.containerToScroll !== this.state.containerToScroll) {
      this.removeListener()
      this.setState({
        containerToScroll: nextProps.containerToScroll,
        containerToListenOn: nextProps.containerToListenOn,
        scroll: this.state.containerToScroll.scrollTop
      }, () => this.attachListener())
    }
  }

  attachListener = () => {
    this.state.containerToListenOn.addEventListener('scroll', this.recordPosition)
  }

  removeListener = () => {
    this.state.containerToListenOn.removeEventListener('scroll', this.recordPosition)
  }

  recordPosition = event => {
    const { onScroll } = this.props

    let scrollTop
    if (this.props.containerToListenOn === window) {
      scrollTop = event.target.body.scrollTop
    } else {
      scrollTop = event.target.scrollTop
    }

    const scroll = Number(scrollTop / 1.5)

    onScroll(scroll, event)
    this.setState({ scroll })
  }

  render () {
    return null
  }
}
