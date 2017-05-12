const {h, Component} = require('preact')

module.exports = class Example extends Component {
  render () {
    return (
      <div className='g-example' data-state={this.props._ssr}>
          <p>foo is {this.props.foo}</p>
          <p>here are my children:</p>
          {this.props.children}
      </div>
    )
  }
}
