import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Details } from '../Pages/Pokedex.details';
import { Home } from '../Pages/Pokedex.home';


const root = document.querySelector('#root');
const app = createRoot(root);

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path=':pages' element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

app.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)