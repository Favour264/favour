import { Button, Image} from '@chakra-ui/react'
import { Flex, Box, Heading, Text, List, ListItem } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import pics from '../Images/pic.jpg'



const NavBar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" padding="1rem" color="black" maxWidth="100%" wrap="wrap" mt="30px" >
      <Box as="div" display="flex" alignItems="center">
        <Heading as="h1" size="md">
          Logi
          <Text as="span" color="#0077B6">Hub</Text>
        </Heading>
      </Box>
      <List display="flex" gap='20px' justifyContent="space-around">
        <ListItem>
          <Link to="/home">Home</Link>
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
      </List>
      <Image
  borderRadius='full'
  boxSize='60px'
  src={pics}
  alt='Dan Abramov'
/>
    </Flex>
  );
};

export default NavBar;