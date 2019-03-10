import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics'
// {} because its not a default export
import { Provider } from './context'

class App extends Component {
  render() {
    return <Provider>
              <BrowserRouter basename="/react/lyricsearch">
                <div>
                  <Navbar />
                  <div className="container">
                    <Switch>
                      <Route exact path="/" component={Index} />
                      <Route exact path="/lyrics/track/:id" component={Lyrics} />  
                    </Switch>
                  </div>
                </div>
              </BrowserRouter>
            </Provider>
  }
}

export default App;
