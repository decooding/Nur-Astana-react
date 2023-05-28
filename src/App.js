import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header.component';
import Main from './pages/main.page';
import Recommend from './pages/Recommend.page';
import NewPlace from './pages/newPlace.page';
import Footer from './components/footer.component';

import Shash from './pages/category/shash.page';
import Steak from './pages/category/steak.page';
import Sushi from './pages/category/sushi.page';
import Meat from './pages/category/meat.page';

import JurnalPage from './pages/Jurnal.page';
import JurnalSoup from './components/jurnal/JurnalSoup.page';
import JurnalLepesh from './components/jurnal/JurnalLepesh.page';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route exact path='/jurnal' element={<JurnalPage/>}/>
            <Route exact path="/allplace" element={<NewPlace />} />
            <Route exact path="/recommend" element={<Recommend />} />

            <Route exact path="/shashlyk" element={<Shash />} />
            <Route exact path="/steak" element={<Steak />} />
            <Route exact path="/sushi" element={<Sushi />} />
            <Route exact path="/meat" element={<Meat />} />

            <Route exact path="/jurnal-soup" element={<JurnalSoup />} />
            <Route exact path="/jurnal-lepeshki" element={<JurnalLepesh />} />
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;