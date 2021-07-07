import React , {useEffect} from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import Blogs from './Blogs';
import HoverItems from './HoverItems';

const Homepage = () => {
    useEffect(() => {
    
      document.title='Think Of It Foundation'
    });
    return (
        <div>
            <HeaderComponent/>
            <Blogs />
            <HoverItems/>
            <FooterComponent/>
        </div>
    )
}

export default Homepage;
