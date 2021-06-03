import React, { useState, useEffect } from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import Chart from './components/Chart/Piechart';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  let source = axios.CancelToken.source();

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    setTimeout(() => {
      axios.get(apiUrl, {
        cancelToken: source.token
      }).then((repos) => {
        const allRepos = repos.data;
        setData(allRepos)
      })
    }, 3000)
  }, [])
  const Reqcal = () => {
    source.cancel()
  }
  console.log(data)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <UserInfo user={data} calRequest={() => Reqcal()} />
          </Route>
          <Route exact path="/sec" component={Chart} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
