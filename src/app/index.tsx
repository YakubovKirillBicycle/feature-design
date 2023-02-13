import React from 'react';

import { Routing } from 'pages';

import { withProviders } from "./providers";

function App() {
  return (
    <Routing />
  );
}

export default withProviders(App);
