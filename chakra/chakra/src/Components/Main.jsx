
import React, { useState } from 'react';
import { Box, Image, Center, Heading, Text,IconButton, useMediaQuery } from '@chakra-ui/react';
import pic from '../Images/ginika.jpg';
import { Button} from '@chakra-ui/react'
import NavBar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';




const Main = () => {

    const [showNavbar, setShowNavbar] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
    return(
        <>
    {isMobile && (
        <IconButton
            aria-label={showNavbar ? "Close Navigation" : "Open Navigation"}
            icon={showNavbar ? <CloseIcon /> : <HamburgerIcon />}
            onClick={toggleNavbar}
            position="fixed"
            top="10px"
            right="20px"
            zIndex="999"
        />
    )}

    <Box position="relative" width={{ base: '100%', md: '100%', lg: '100%' }} height="100%" fontSize={{ base: '15px', md: '20px', lg: '20px' }}>
        <Box position="absolute" top="0" left="0" right="0" zIndex="1">
            {showNavbar && <NavBar />}
        </Box>
        <Image src={pic} alt="image" w="100%" h="100%" objectFit="cover" filter='brightness(50%)' />
        <Center position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center" color="white">
            <Box mt={{ base: '20px', md: '40px', lg: '50px' }}>
                <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>The one stop-hub for<br></br>everything logistics</Heading>
                <Text pt="5px">Best prices. Seamless experience. Multiple service options.</Text>
                <Button colorScheme='blue' borderRadius='20px' size='small' p={{ base: '4px', md: '4px', lg: '6px' }} h='8' ml='40px' mt='5px'>
                    <Link to="/RequestD">Send Delivery Request Now</Link>
                </Button>
            </Box>
        </Center>
    </Box>
</>

    )
}

export default Main;

