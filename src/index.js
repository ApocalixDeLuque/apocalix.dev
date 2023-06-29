import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,} from 'react-router-dom';
import App from './App';
//import { ScrollToTop } from './components';
//import smoothScrollPolyfill from 'smoothscroll-polyfill';
//import reportWebVitals from './reportWebVitals';

//smoothScrollPolyfill.polyfill();

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/*<ScrollToTop />*/}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

//reportWebVitals();