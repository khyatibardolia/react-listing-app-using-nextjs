import '../styles/globals.css';
import LayoutHoc from '../common/layoutHoc';

function MyApp({Component, pageProps}) {
  return (<LayoutHoc>
    <Component {...pageProps} />
  </LayoutHoc>);
}

export default MyApp;
