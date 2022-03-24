import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom'

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import Header from './Components/Header'
import PrivateRoute from './utils/PrivateRoute';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" exact element={<PrivateRoute><HomePage/></PrivateRoute>} />
          <Route element={<LoginPage />} path="/login"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;