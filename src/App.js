import './App.css';
import elasticsearch from 'elasticsearch';
import { Component } from 'react';


let client = new elasticsearch.Client({
  host: process.env.REACT_APP_ELASTIC_IP_AND_PORT,
  log: 'trace',
  httpAuth: process.env.REACT_APP_ELASTIC_USER_AND_PASSWORD,
  apiVersion: '7.2', // use the same version of your Elasticsearch instance
});

class App extends Component
{
  render()
  {
    return (
      <div className="App">
  
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
