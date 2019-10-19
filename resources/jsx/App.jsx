import React from 'react'
import ReactDOM from 'react-dom'
import ReduxProvider from './Data/ReduxProvider'
import MainRouter from './Routes/MainRouter';
import 'roboto-fontface'
ReactDOM.render(
      <ReduxProvider>
            <MainRouter />
      </ReduxProvider>,
    document.getElementById('root')
  );