install dependencies

`npm start` will run node webserver

visit http://localhost:8080, http://localhost:8080/api, or http://localhost:8080/about.html

`npm run dev` will start webpack and generate bundle.js from our React source code (in the public/ directory)

using node.js, Express, EJS, Babel, Webpack, React

###syntax if you don't need state###

```js
const App = () => {
  return(
    <div className="App">
      <Header message="Naming Contests" />
      <div>
        ...
      </div>
    </div>
  );
};

export default App;

```

###syntax if you need state or lifecycle methods###

```js
class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Header message="Naming Contests" />
        <div>
          ...
        </div>
      </div>
    );
  }
}

export default App;

```
