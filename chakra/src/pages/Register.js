import React from 'react'
import Navbar2 from '../Components/Navbar2';
import { Box ,Button,Flex, Heading, Text} from '@chakra-ui/react';
import NavBar from '../Components/Navbar2';
import NavBar4 from '../Components/Navbar4';
import { Link } from 'react-router-dom';



const Register = () => {
  return (
    <Box>
      <Flex direction={{base:'column', lg:'row'}}>
        <Box width={{base:'470px' , lg:'700px'}} height='700px' backgroundColor='yellow'>
        <NavBar/>
        <Heading as='h1' ml={{ base:'75px',lg:'160px'}} mt={{base:'90px',lg:'170px'}}>
          Sign up as a customer
        </Heading>
        <Text ml={{ base:'60px',lg:'160px'}} mt='20px'>
          Send your goods fast,cheap,comfortable and safe.
        </Text>
        <Button colorScheme='blue' borderRadius='20px' ml={{sm:'180px', lg:'250'}} mt='30px' w='130px'><Link to='/Login'>Get Started</Link>
        </Button>
        </Box>
        <Box width={{ base:'470px',lg:'700px'}} height='700px' backgroundColor='#020231'>
        <NavBar4/>
        <Heading as='h1' ml={{sm:'100px', lg:'170px'}} mt='170px' color='white'>
          Become a Vendor
        </Heading>
        <Text ml={{ base:'70px',lg:'160px'}} mt='20px' white='white' color='white'>
          Send your goods fast,cheap,comfortable and safe.
        </Text>
        <Button colorScheme='blue' borderRadius='20px' ml={{sm:'160px', lg:'250px'}} mt='30px' w='130px' color='white'><Link to='/Login'>Get Started</Link>
        </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Register;

