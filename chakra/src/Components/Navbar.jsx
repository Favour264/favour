import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Box, Heading, Text, List, ListItem } from "@chakra-ui/react";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" padding="1rem" gap='20px' color="white" width={{ base: '100%', sm: '100%', md: '100%' }}   mt="30px" >
      <Box as="div" display="flex" alignItems="center"  Width={{ base: '100px', md: '100%', lg: '100%' }}>
        <Heading as="h1" size="md">
          Logi
          <Text as="span" color="#0077B6">Hub</Text>
        </Heading>
      </Box>
      <List display="flex" flexDirection={{ base: 'row', md: 'row', lg: 'row' }} gap='5px' justifyContent="space-around">
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
        <ListItem pl='350px'>
          <Link to="/login">Login</Link>
        </ListItem>
        <ListItem>
          <Button colorScheme='blue' size='small' p='4' h='8' borderRadius='20'> <Link to="/register">Register</Link></Button>
        </ListItem>

      </List>
    </Flex>
  );
};

export default NavBar;