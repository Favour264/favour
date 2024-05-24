import { Box, Heading, Flex, List, ListItem, FormControl, FormLabel, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import NavBar from '../Components/Navbar3';
import React, { useState } from 'react';
import { InputLeftElement,InputRightElement,Button ,Text,IconButton, useMediaQuery} from "@chakra-ui/react";
import { TiTime } from "react-icons/ti"; 
import Footer from '../Components/Footer2'
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const RegisterD = () => {
  
  return (
    <Box>
      <Heading as='h6' mt='30px' ml={{ base: '5px', md: '190px', lg: '450px' }} alignItems={{ base: 'center', md: 'center', lg: 'center' }}>
        Request Parcel Delivery
      </Heading>
      <Flex ml={{ base: '20px', md: '35px', lg: '50px' }} justifyContent='center' direction='row'>
        <List style={{ listStyleType: 'none' }}>
          <Flex mt='40px'>
            <ListItem style={{ backgroundColor: '#E6E6FA', width: '90px', height: '90px', padding: '0.6em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', marginRight: '70px', color: '#0077B6' }}>1</ListItem>
            <hr style={{ margin: '0 auto', border: 'none', borderBottom: '2px solid black', alignItems: 'center', width: '360px', marginTop: '110px' }} />
            <ListItem style={{ backgroundColor: '#0077B6', width: '90px', height: '90px', padding: '0.6em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', marginRight: '70px', color: 'white' }}>2</ListItem>
            <hr style={{ margin: '0 auto', border: 'none', borderBottom: '2px solid black', alignItems: 'center', width: '360px', marginTop: '110px' }} />
            <ListItem style={{ backgroundColor: '#0077B6', width: '90px', height: '90px', padding: '0.6em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', margin: '5px', color: 'white' }}>3</ListItem>
          </Flex>
        </List>
      </Flex>
      <Box ml={{ base: '20px', md: '30px', lg: '30px' }}>
        <Flex direction={{ base: 'column', md: 'column' }}>
          <Box flex='none' width={{ base: 'full', md: '50%' }} mr={{ base: '0', md: '150px' }}>
            <Heading>PickUp Details</Heading>
            <FormControl isRequired mt='20px'>
              <FormLabel>Customer's name</FormLabel>
              <Input placeholder='First name' width='550px' mt='10px' height="50px" style={{ backgroundColor: '#E6E6FA' }} />
            </FormControl>
            <FormControl isRequired mt='20px'>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Email' width='550px' mt='10px' height="50px" style={{ backgroundColor: '#E6E6FA' }} />
            </FormControl>
            <FormControl isRequired mt='20px'>
              <FormLabel>Pickup Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon>+234</InputLeftAddon>
                <Input type='tel' placeholder='Phone number' width='480px' height="50px" style={{ backgroundColor: '#E6E6FA' }} />
              </InputGroup>
            </FormControl>
            <FormControl isRequired mt='20px'>
              <FormLabel>Pickup Address</FormLabel>
              <Input placeholder='Address' width='550px' mt='10px' height="50px" style={{ backgroundColor: '#E6E6FA' }} />
            </FormControl>
            <FormControl isRequired mt='20px'>
              <FormLabel>Category</FormLabel>
              <Input placeholder='Category' width='550px' mt='10px' height="50px" style={{ backgroundColor: '#E6E6FA' }} />
            </FormControl>
          </Box>
          <Box flex='none' width={{ base: 'full', md: '50%' }} mt={{ base: '20px', md: '0' }}>
            <Heading fontSize={{ base: 'xl', md: '2xl' }}>PickUp Details</Heading>
            <FormControl isRequired mt='20px'>
              <FormLabel>Recipient Name</FormLabel>
              <Input placeholder='Recipient name' width='550px' mt='10px' height="50px" style={{ backgroundColor: '#E6E6FA' }} />
            </FormControl>
            <FormControl isRequired mt='20px'>
              <FormLabel>Pickup Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon>+234</InputLeftAddon>
                <Input type='tel' placeholder='Phone number' width='480px' height="50px" style={{ backgroundColor: '#E6E6FA' }} />
              </InputGroup>
            </FormControl>
            <FormControl isRequired mt='20px'>
              <FormLabel>Pickup Address</FormLabel>
              <Input placeholder='Address' width='550px' mt='10px' height="50px" style={{ backgroundColor: '#E6E6FA' }} />
            </FormControl>
            <FormControl isRequired mt='20px'>
              <FormLabel>Pickup Time</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'></InputLeftElement>
                <Input placeholder='Time' style={{ '::placeholder': { color: 'blue' }, backgroundColor: '#E6E6FA' }} />
                <InputRightElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                  <TiTime />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Box>
        </Flex>
      </Box>
      <Button colorScheme='blue' size='small' p='5' width={{ base: 'full', md: '200px' }} h='8' mt='30px' ml={{ base: '5px', md: '600px' }} borderRadius='20'><Link to='/RequestD2'>Proceed</Link></Button>
      <Footer />
    </Box>
  );
};

export default RegisterD;

