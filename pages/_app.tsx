import '@styles/reset.scss';
import '@styles/globals.scss';
import '@styles/delete-me.scss';
import { AppProps } from 'next/app';

// Delete this if runtime JavaScript is needed:
export const config = {
  unstable_runtimeJS: false,
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
