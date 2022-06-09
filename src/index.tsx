import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toast';

import App from './containers/app';
import ErrorBoundary from './containers/errorBoundary';
import Fallback from './containers/fallback';
import GlobalStyles from './theme/global';
import LanguageProvider from './containers/languageProvider';
import Layout from './containers/layout';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { ApplicationStore } from './store';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <QueryClientProvider client={queryClient}>
              <Layout>
                <ErrorBoundary fallback={<Fallback />}>
                  <ApplicationStore>
                    <>
                      <ToastContainer position="bottom-right" delay={4000} />
                      <App />
                    </>
                  </ApplicationStore>
                </ErrorBoundary>
              </Layout>
            </QueryClientProvider>
          </>
        </ThemeProvider>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
