import React, { Component, lazy, Suspense } from 'react';
import './App.css';

const Page1 = lazy(() => import('./Components/Page1'));
const Page2 = lazy(() => import('./Components/Page2'));
const Page3 = lazy(() => import('./Components/Page3'));
const renderLoader = () => <p>Loading</p>;

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
    }
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  }
  render() {
    return (
      <Suspense fallback={renderLoader()}>
        {this.state.route === 'page1' && (
          <Page1 onRouteChange={this.onRouteChange} />
        )}
        {this.state.route === 'page2' && (
          <Page2 onRouteChange={this.onRouteChange} />
        )}
        {this.state.route === 'page3' && (
          <Page3 onRouteChange={this.onRouteChange} />
        )}
      </Suspense>
    )


  }
}

export default App;
