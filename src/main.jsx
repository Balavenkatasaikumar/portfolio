/**
 * @copyright (c) 2023 by Unstoppable Domains, Inc.
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * CSS
 */
import './index.css';
import 'lenis/dist/lenis.css';

/**
 * Components
 */
import App from './App.jsx';

// Render
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('No root element found!');
}
