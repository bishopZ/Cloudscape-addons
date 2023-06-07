

import React from 'react';
import { createRoot } from 'react-dom/client';

import { Application } from './views/application';

document.addEventListener('DOMContentLoaded', () => {
  const domNode = document.getElementById('root');
  if (domNode) {
    const root = createRoot(domNode);
    root.render(<Application />);
  }
});
