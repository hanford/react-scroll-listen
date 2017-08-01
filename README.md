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

## API / Props
| Param              | Type    | args         | default       | required |
|--------------------|---------|--------------|---------------|----------|
| onScroll           | Function| value, event |               |   true   |
| container | ref     |              | window        |   false  |
| element  | ref     |              | document.body |   false  |

Note: `containerToListenOn` and `containerToScroll` can be the same but don't have to be

MIT © [Jack Hanford](http://jackhanford.com)
