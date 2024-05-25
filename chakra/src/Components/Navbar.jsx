import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { Flex, Box, Heading, Text, List, ListItem } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={toggleNavbar} display={{ base: 'block', md: 'none' }}>
        {isOpen ? 'Close' : 'Menu'}
      </Button>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={{ base: '0.5rem', lg: '1rem' }}
        gap={{ base: '1px', lg: '30px' }}
        color="black"
        width={{ base: '50%', sm: '100%', md: '100%' }}
        mt={{ base: '10px', lg: '30px' }}
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box
          as="div"
          display="flex"
          alignItems="center"
          Width={{ base: '100px', md: '100%', lg: '100%' }}
        >
           

        </Box>
        <List
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
          gap='5px'
          justifyContent={{ base: 'space-between', lg: 'space-around' }}
          bg="white" // Background color for the dropdown
          p="1rem" // Padding for the dropdown
        >
          <ListItem>
          <Heading as="h1" size={{ base: 'xl', lg: 'md' }}>
            Logi
            <Text as="span" color="#0077B6">
              Hub
            </Text>
          </Heading>
          </ListItem>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/register">Become a Vendor</Link>
          </ListItem>
          <ListItem>
            <Link to="/support">Support</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">About</Link>
          </ListItem>
          <ListItem pl={{ sm: '10px', lg: '350px' }}>
            <Link to="/login">Login</Link>
          </ListItem>
          <ListItem>
            <Button colorScheme='blue' size='small' p={{ sm: '5px', lg: '6px' }} pl={{ sm: '3px', lg: '8px' }}> <Link to="/register">Register</Link></Button>
          </ListItem>
        </List>
      </Flex>
    </>
  );
};

export default NavBar;
