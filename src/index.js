import React from 'react';
import ReactDOM from 'react-dom';

// a react component is simply a function
const App = (props) => {
  return(
    <h2>
      {props.headerMessage}
    </h2>
  );
};

App.propTypes = {
  headerMessage: React.PropTypes.string
};

ReactDOM.render(
  <App headerMessage="props!!!" />,
  document.getElementById('root')
);
