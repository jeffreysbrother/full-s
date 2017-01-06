import React from 'react';
import Header from './Header';


// a react component is simply a function
class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Header message="Naming Contests" />
        <div>
          ---
        </div>
      </div>
    );
  }
}

export default App;
