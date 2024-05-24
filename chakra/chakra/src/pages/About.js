import React, { useState } from 'react';
import { Box, Text, Heading, Stack } from '@chakra-ui/react';
import { Card, CardBody, Image } from '@chakra-ui/react';
import pic from '../Images/ginika.jpg';
import { Button, Flex, IconButton, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NavBar from '../Components/Navbar3';
import Footer from '../Components/Footer2';

const About = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <Box>
      {isMobile && (
        <IconButton
          aria-label={showNavbar ? "Close Navigation" : "Open Navigation"}
          icon={showNavbar ? <CloseIcon /> : <HamburgerIcon />}
          onClick={toggleNavbar}
          position="fixed"
          top="20px"
          right="20px"
          zIndex="999"
        />
      )}
      {showNavbar && <NavBar />}
      <Flex direction={['column', 'column', 'row']} justifyContent="center" alignItems="center" flexWrap="wrap">
        <Card maxW={['100%', '100%', '45%', '45%']} mx="auto" mt="70px" mb="20px">
          <CardBody>
            <Image src={pic} alt="Green double" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Parcel Delivery</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
              </Text>
              <Button colorScheme="blue" size="small" p="6" h="4" mt="30px" borderRadius="23">Request Parcel Delivery</Button>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW={['100%', '100%', '45%', '45%']} mx="auto" mt={['20px', '20px', '70px']} mb="20px">
          <CardBody>
            <Image src={pic} alt="Green double" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Parcel Delivery</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
              </Text>
              <Button colorScheme="blue" size="small" p="6" h="4" mt="30px" borderRadius="23">Request Parcel Delivery</Button>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW={['100%', '100%', '45%', '45%']} mx="auto" mt="70px" mb="20px">
          <CardBody>
            <Image src={pic} alt="Green double" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Parcel Delivery</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
              </Text>
              <Button colorScheme="blue" size="small" p="6" h="4" mt="30px" borderRadius="23">Request Parcel Delivery</Button>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW={['100%', '100%', '45%', '45%']} mx="auto" mt={['20px', '20px', '70px']} mb="20px">
          <CardBody>
            <Image src={pic} alt="Green double" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Parcel Delivery</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
              </Text>
              <Button colorScheme="blue" size="small" p="6" h="4" mt="30px" borderRadius="23">Request Parcel Delivery</Button>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
      <Footer />
    </Box>
  );
};

export default About;
