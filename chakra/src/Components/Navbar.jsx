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
      <Button onClick={toggleNavbar} colorScheme='blue' display={{ base: 'block', md: 'none' }}>
        {isOpen ? 'Close' : 'Menu'}
      </Button>
      <Flex
        as="nav"
        align=""
        justify="space-between"
        padding={{ base: '0.5rem', lg: '10px' }}
        gap={{ base: '1px', lg: '80px' }}
        color={{base:'black', md:'white', lg:'white'}}
        width={{ base: '50%', sm: '100%', md: '100%', lg:'100%' }}
        mt={{ base: '10px', lg: '30px' }}
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
        flexDirection={{ base: 'column', md: 'row', lg:'row' }}
      >
        <Box
          backgroundColor="yellow"
          as="div"
          display="flex"
          alignItems=""
          Width={{ base: '100px', md: '100%', lg: '100%' }}
        >
           

        </Box>
        <List
          width={{base:'30%' , md:'60%' , lg:'100%'}}
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
          gap='5px'
          justifyContent={{ base: 'space-between', lg: 'space-around' }}
          bg={{base:'white', md:'none', lg:'none'}} // Background color for the dropdown
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
          <ListItem pl={{ sm: '4px', lg: '350px' }}>
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
