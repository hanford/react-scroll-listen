## react-scroll-listen

<p>Save the value of the document scroll position efficiently with one event listener</p>

<br />

## Install

```
$ npm install react-scroll-listen --save
```

## Usage

```js
import ScrollListener from 'react-scroll-listen'

render () {
  return (
    <ScrollListener
      onScroll={value => this.setState({scrollPosition: value})}
    />
  )
}
```

## API
| Param          | Type    | args | required |
|----------------|---------|-----------------|-----------------|
| onScroll           | Function | value, event | true |

MIT © [Jack Hanford](http://jackhanford.com)
