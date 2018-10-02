// first call the react component
var React = require('react');
var ReactDOM = require('react-dom');
// require css to show inside our app
require('./index.css');

//  A component has 3 different parts
// .state ( data, objs etc)
// .lifecycle.events (hook into specific moments)
// .UI (always) ----render() method, how the UI looks

//you build with class
class App extends React.Component {
  render() {
    return (
      <div>
        Omg all this for some  green background!
      </div>
    )
  }
}

// to use React DOM
//it will take two arguments 1- react element 2- where we want to render
ReactDOM.render(
  // we get our class.App.React.Component and this is how we write
  <App />,
  //where
  document.getElementById('app')
)
