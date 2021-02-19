import Footer from './footer';
import Navbar from './navbar';

const LayoutHoc = ({children}) => {
  return (
    <div className={'content'}>
      <Navbar/>
      <div className={'middle-content'}>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default LayoutHoc;
