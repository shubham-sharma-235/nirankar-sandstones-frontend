import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './assets/css/bootstrap.min.css';
import './assets/css/swiper-bundle.min.css';
import './assets/css/all.min.css';
import './assets/css/flaticon_barsi.css';
import './assets/css/nice-select.css';
import './assets/css/animate.css';
import './assets/css/magnific-popup.css';
import './assets/css/main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
