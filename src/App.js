import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { loginApi } from './api/auth';
import Holtel from './components/hotel/Holtel';

function App() {
  const [token, setToken] = useState('');
  useEffect(() => {
    const dataLogin = {
      "email" : "testing@gmail.com",
      "password" : "123a123@"
    };
    const data = loginApi(dataLogin).then((res)=>{
      if(res.status == 200) {
        setToken(res.data.token);
      }
    }).catch((err) => {
      console.log("err", err);
    })
  }, []);
  console.log("token", token);
  
  // console.log("base url", process.env.REACT_APP_API_BASE_URL );
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Holtel></Holtel>
    </div>
  );
}

export default App;
