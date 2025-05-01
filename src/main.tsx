import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { AppEntry } from './app/entry';
import { enableMocking } from './mocks';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Root element not found');

const root = ReactDOM.createRoot(rootElement);
enableMocking().then(() => {
  root.render(
    <StrictMode>
      <AppEntry />
    </StrictMode>,
  );
});
