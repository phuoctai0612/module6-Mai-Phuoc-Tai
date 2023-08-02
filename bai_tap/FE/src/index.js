import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import SongManagement from './components/SongManagement';
import CreateSong from './components/CreateSong';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='' element={<SongManagement />}></Route>
      <Route path='/songs/create' element={<CreateSong />}></Route>
    </Routes>
   
    </BrowserRouter>
  </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
