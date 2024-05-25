import { Button, ButtonGroup, Divider } from '@chakra-ui/react';
import { Flex, Box, Heading, Text, List, ListItem } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" padding="0.5rem" color="#020231" maxWidth="100%" wrap="wrap" mt="50px">
      {/* Left Section */}
      <Flex align="center">
        <Box mr="4">
          <Heading as="h1" size="md">
            Logi
            <Text as="span" color="#0077B6">Hub</Text>
          </Heading>
        </Box>
        <List display="flex" gap='20px' justifyContent="space-around">
          <ListItem ml={{sm:'80px', lg:'180px'}}>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem ml={{base:'60px', lg:'120px'}}>
            <Link to="/register">Become a Vendor</Link>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};

export default NavBar;
