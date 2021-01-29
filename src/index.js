import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Cards';
import Detarr from './Detarr';
import Header from './Header';
import Home from './Home';


ReactDOM.render(
  <>
  <div id="header">
   <Header />
   </div> 
    <div id="home">
    <Home />
    </div>
    <div className="cards_re" id="series">
    {Detarr.map((val) => {
        return(
            <Cards
            key={val.id}
            imgsrc={val.imgsrc}
            sname={val.sname}
            link={val.link}
            />
        );
    })}
  </div>
  
  </>,
  document.getElementById('root')
);