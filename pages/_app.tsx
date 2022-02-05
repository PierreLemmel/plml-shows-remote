import React, { useEffect, useRef, useState } from 'react';
import { AppProps } from 'next/app';

import '../styles/index.css'
import Head from 'next/head';
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system';

const App = ({ Component, pageProps }: AppProps) => {
   
    const muiTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return <ThemeProvider theme={muiTheme}>
        <Head>
            <title>Plml</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="favicon.ico" />
        </Head>
        <div className="m-0 w-screen h-screen bg-slate-800 text-gray-300 overflow-x-hidden">
            <Component {...pageProps} />
        </div>
    </ThemeProvider>
}
export default App