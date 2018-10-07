var React = require('react');
var Popular = require('./Popular');

//you build with class
class App extends React.Component {
  render() {
    return (
      <div className='container' >
        <Popular />
      </div>
    )
  }
}

/*  knowing that we are creating a new doc, and we required on
index.js  we also need to tell this doc that we allow to export as a name of
. that creates the connection. Lik this index.s can require */
module.exports = App;
