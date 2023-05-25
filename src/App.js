import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import ViewRest from './components/ViewRest';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path = "/" element= {<RestaurantList/>}/>
        <Route path = "/view-rest/:id" element= {<ViewRest/>}/>
      </Routes>
      <RestaurantList/>
      <Footer/>
    </>
    
  );
}

export default App;
