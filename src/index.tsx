import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles';
import { myTheme } from 'styles';
import App from 'components/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
      <ThemeProvider theme={myTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);

