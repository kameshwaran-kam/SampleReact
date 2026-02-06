import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import Store from './redux/Store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <Home />
    </Provider>
  </StrictMode>,
)
