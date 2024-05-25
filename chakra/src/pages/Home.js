
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, } from '@chakra-ui/react'
import Main from "../Components/Main";
import '../App.css';
import Body from "../Components/Body";
import Container from "../Components/Container";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <Main />
            <Body />
            <Container /><br></br>
            <Button className='btn' colorScheme='blue' size=',md' p='5' h='10'  mb='30px'
                ml={{ base: '80px', md: '370px', lg: '570px' }} borderRadius='20'><Link to='/RequestD'>Request Delivery Now</Link></Button>
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    );
}

export default Home;
