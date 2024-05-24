import React from 'react'
import Navbar2 from '../Components/Navbar2';
import { Box ,Button,Flex, Heading, Text} from '@chakra-ui/react';
import NavBar from '../Components/Navbar2';
import NavBar4 from '../Components/Navbar4';
import { Link } from 'react-router-dom';



const Register = () => {
  return (
    <Box>
      <Flex>
        <Box width='700px' height='700px' backgroundColor='white'>
        <NavBar/>
        <Heading as='h1' ml='90px' mt='170px'>
          Sign up as a customer
        </Heading>
        <Text ml='160px' mt='20px'>
          Send your goods fast,cheap,comfortable and safe.
        </Text>
        <Button colorScheme='blue' borderRadius='20px' ml='250' mt='30px' w='130px'><Link to='/Login'>Get Started</Link>
        </Button>
        </Box>
        <Box width='700px' height='700px' backgroundColor='#020231'>
        <NavBar4/>
        <Heading as='h1' ml='90px' mt='170px' color='white'>
          Become a Vendor
        </Heading>
        <Text ml='160px' mt='20px' white='white' color='white'>
          Send your goods fast,cheap,comfortable and safe.
        </Text>
        <Button colorScheme='blue' borderRadius='20px' ml='250' mt='30px' w='130px' color='white'><Link to='/Login'>Get Started</Link>
        </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Register;

