import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { hellowWorldRequest, helloWorldResponse } from './imp-grpc-web-sample/imp-grpc-web-sample_pb'
import { ServiceError, helloWorldServiceClient } from './imp-grpc-web-sample/imp-grpc-web-sample_pb_service'

const App: React.FC = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const client = new helloWorldServiceClient('http://localhost:8080')
    const request = new hellowWorldRequest();
    client.getHelloWorld(request, (error: ServiceError | null, response: helloWorldResponse | null) => {
      if (error) {
        throw error;
      }
      if (response) {
        setMessage(response.getReturntext());
      }
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
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

export default App;
