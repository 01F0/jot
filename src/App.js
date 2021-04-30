import logo from './logo.svg';
import './App.css';
import elasticsearch from 'elasticsearch';
import { Component } from 'react';


let client = new elasticsearch.Client({
  host: process.env.ELASTIC_IP_AND_PORT,
  log: 'trace',
  httpAuth: process.env.ELASTIC_USER_AND_PASSWORD,
  apiVersion: '7.2', // use the same version of your Elasticsearch instance
});

class App extends Component
{

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
  componentDidMount()
  {
    client.ping({
      // ping usually has a 3000ms timeout
      requestTimeout: 1000
    }, function (error)
    {
      if (error)
      {
        console.trace('elasticsearch cluster is down!');
      } else
      {
        console.log('All is well');
      }
    });
  }

}
export default App;
