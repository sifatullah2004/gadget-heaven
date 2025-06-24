import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='min-h-[calc(100vh-285px)] bg-base-300'>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;