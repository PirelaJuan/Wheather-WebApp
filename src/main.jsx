
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout.jsx';
import DetailView from './routes/DetailView.jsx';
import DateDetails from "./components/DateDetails.jsx";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route  path="/" element={<Layout />} >
          <Route index={true} element={<App />} />
          <Route path="/DateDetails/:index" element={<DateDetails />} /> 
        </Route>
    </Routes>
  
  
</BrowserRouter>
);




