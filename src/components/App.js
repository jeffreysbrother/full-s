import React from 'react';
import Header from './Header';


// a react component is simply a function
class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };

  render() {
    return(
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          ---
        </div>
      </div>
    );
  }
}

export default App;
