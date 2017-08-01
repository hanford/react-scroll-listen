import React, { PureComponent } from 'react'

import window from 'global/window'
import document from 'global/document'

export default class ScrollListener extends PureComponent {
  state = {
    scroll: 0,
    containerToListenOn: this.props.containerToListenOn || window,
    containerToScroll: this.props.containerToScroll || document.body,
    hasMounted: false
  }

  componentDidMount () {
    this.setState({scroll: this.state.containerToScroll.scrollTop, hasMounted: true})
    this.attachListener()
  }

  componentWillUnMount () {
    this.setState({hasMounted: false})
    this.removeListener()
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { hasMounted } = this.state

    if (hasMounted && nextProps.containerToScroll !== this.state.containerToScroll) {
      this.removeListener()
      this.setState({
        containerToScroll: nextProps.containerToScroll,
        containerToListenOn: nextProps.containerToListenOn,
        scroll: this.state.containerToScroll.scrollTop
      }, () => this.attachListener())
    }
  }

  attachListener = () => {
    const { containerToListenOn } = this.state

    if (!containerToListenOn) return

    containerToListenOn.addEventListener('scroll', this.recordPosition)
  }

  removeListener = () => {
    const { containerToListenOn } = this.state

    if (!containerToListenOn) return

    containerToListenOn.removeEventListener('scroll', this.recordPosition)
  }

  recordPosition = event => {
    const { onScroll, containerToListenOn } = this.props

    let scrollTop

    if (event.target === document) {
      scrollTop = event.target.body.scrollTop
    } else {
      scrollTop = event.target.scrollTop
    }

    onScroll(scroll, event)
    this.setState({ scroll: scrollTop })
  }

  render () {
    return null
  }
}
