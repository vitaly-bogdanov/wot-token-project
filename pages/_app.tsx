import '../styles/globals.css';
import { FC, ReactElement } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }): ReactElement => <Component {...pageProps} />;

export default App