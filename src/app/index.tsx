import React from 'react';
import { withProviders } from "./providers";
import { Routing } from 'processes';

function App() {
  return (
    <Routing />
  );
}

export default withProviders(App);
