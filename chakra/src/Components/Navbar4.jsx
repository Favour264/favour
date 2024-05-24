import { Button, ButtonGroup, Divider } from '@chakra-ui/react';
import { Flex, Box, Heading, Text, List, ListItem } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const NavBar4 = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" padding="0.5rem" color="white" maxWidth="100%" wrap="wrap" mt="50px">
      {/* Left Section */}
      <Flex align="center">
      <List display="flex" gap='20px' justifyContent="space-around">
      <ListItem>
          <Link to="/support">Support</Link>
        </ListItem>
        <ListItem ml='20px'>
          <Link to="/about">About</Link>
        </ListItem>
        <ListItem pl='320px'>
          <Link to="/login">Login</Link>
        </ListItem>
        <ListItem>
          <Button colorScheme='blue' size='small' p='4' h='8' borderRadius='20'> <Link to="/register">Register</Link></Button>
        </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};

export default NavBar4;
