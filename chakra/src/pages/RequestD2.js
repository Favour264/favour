import React, {useState} from 'react';
import { Box, Heading, ListItem, Flex, List, Text, Divider,IconButton, useMediaQuery } from '@chakra-ui/react';
import Footer from '../Components/Footer2';
import { Icon, Button } from '@chakra-ui/react';
import { FaCreditCard, FaUniversity, FaMoneyBill } from 'react-icons/fa';
import NavBar from '../Components/Navbar3';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const RequestD2 = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <Box>
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
      <Heading as='h6' mt='30px' ml={{ base: '70px', md: '190px', lg: '450px' }} alignItems={{ base: 'center', md: 'center', lg: 'center' }}>
        Request Parcel Delivery
      </Heading>
      <Flex ml={{ base: '60px', md: '35px', lg: '50px' }} justifyContent='center' direction='row'>
        <List style={{ listStyleType: 'none' }}>
          <Flex mt='40px'>
          <ListItem 
  style={{ 
    backgroundColor: '#0077B6', 
    width: { sm: '30px', lg: '90px' }, 
    height: '90px', 
    padding: '0.6em', 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: '40px', 
    marginRight: { sm:'50px',lg:'70px'}, 
    color: 'white' 
  }}
>

  1
</ListItem>

           
            <ListItem 
  style={{ 
    backgroundColor: '#0077B6', 
    width: { sm: '30px', lg: '90px' },
    height: '90px', 
    padding: '0.6em', 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: '40px', 
    marginRight: '20px', 
    marginLeft: '20px' ,
    color: 'white' 
  }}
>
  2
</ListItem>

           
            <ListItem 
  style={{ 
    backgroundColor: '#0077B6', 
    width: { sm: '30px', lg: '90px' }, 
    height: '90px',  
    padding: '0.6em', 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: '40px', 
    marginRight: '40px', 
    color: 'white' 
  }}
>
  3
</ListItem>

          </Flex>
        </List>
      </Flex>
      <Box width={{sm:'250px' ,lg:'550px'}} ml={{sm:'10px' ,lg:'60px'}} mt='60px' height='650px' color='grey'>
        <Flex direction={{base:'column', lg:'row'}}>

          <Box>
            <Box width={{sm:'150px' ,lg:'370px'}} ml={{sm:'10px' ,lg:'60px'}} height='35px' bgColor='#E6E6FA'>
              <Text alignItems='Center' fontSize='lg' ml='10px'>
                Magic Land,No.1,Market Avenue,Kuje,Abuja
              </Text>
            </Box>
            <Box width={{sm:'150px' ,lg:'370px'}} ml={{sm:'10px' ,lg:'60px'}} height='35px' bgColor='#E6E6FA' mt='10'>
              <Text alignItems='Center' fontSize='lg' ml='10px'>
                Magic Land,No.2,Market Avenue,Kuje,Abuja
              </Text>
            </Box>
            <Flex align="center" justify="space-between">
              <Box>
                <Heading as="h4" fontSize="lg" ml={{sm:"20px" ,lg:"60px"}} mt="30px" flex="none" color='#020231'>
                  Ikeja
                </Heading>
                <Text ml={{sm:'20px' ,lg:'60px'}} flex="none" mt='5px'>
                  105km * 60mins
                </Text>
                <Heading as="h6" fontSize="small"  ml={{sm:'20px' ,lg:'60px'}} flex="none" mt='5px' color='#020231'>
                  10m Away from you
                </Heading>
              </Box>
              <Text mr={{sm:'170px' ,lg:'20px'}} mt='10px' fontSize='4xl' color='#0077B6'>$55,000</Text>
            </Flex>

            <Divider width={{base:'450px' , lg:'430px'}} border='1.5px solid grey' mt='30px'></Divider>

            <Flex align="center" justify="space-between">
              <Box>
                <Heading as="h4" fontSize="lg" ml={{sm:"20px" ,lg:"60px"}} mt="30px" flex="none" color='#020231'>
                  Kubwa
                </Heading>
                <Text ml={{sm:'20px' ,lg:'60px'}} flex="none" mt='5px'>
                  85km * 50mins
                </Text>
                <Heading as="h6" fontSize="small" ml={{sm:"20px" ,lg:"60px"}} flex="none" mt='5px' color='#020231'>
                  5m Away from you
                </Heading>
              </Box>
              <Text mr={{sm:'170px' ,lg:'20px'}} mt='10px' fontSize='4xl' color='#0077B6'>$10,200</Text>
            </Flex>

            <Divider width={{base:'450px' , lg:'430px'}} border='1.5px solid grey' mt='30px'></Divider>

            <Flex align="center" justify="space-between">
              <Box>
                <Heading as="h4" fontSize="lg" ml={{sm:"20px" ,lg:"60px"}} mt="30px" flex="none" color='#020231'>
                  Area 1
                </Heading>
                <Text ml={{sm:"20px" ,lg:"60px"}} flex="none" mt='5px'>
                  11km * 5mins
                </Text>
                <Heading as="h6" fontSize="small" ml={{sm:"20px" ,lg:"60px"}} flex="none" mt='5px' color='#020231'>
                  1.8m Away from you
                </Heading>
              </Box>
              <Text mr={{sm:'170px' ,lg:'20px'}} mt='10px' fontSize='4xl' color='#0077B6'>$2,500</Text>
            </Flex>

            <Divider width={{base:'450px' , lg:'430px'}} border='1.5px solid grey' mt='30px'></Divider>

            <Flex align="center" justify="space-between">
              <Box>
                <Heading as="h4" fontSize="lg" ml={{sm:"20px" ,lg:"60px"}} mt="30px" flex="none" color='#020231'>
                  Kuje
                </Heading>
                <Text ml={{sm:"20px" ,lg:"60px"}} flex="none" mt='5px'>
                  50km * 30mins
                </Text>
                <Heading as="h6" fontSize="small" ml={{sm:"20px" ,lg:"60px"}} flex="none" mt='5px' color='#020231'>
                  5m Away from you
                </Heading>
              </Box>
              <Text mr={{sm:'170px' ,lg:'20px'}} mt='10px' fontSize='4xl' color='#0077B6'>$8,300</Text>
            </Flex>
            <Divider width={{base:'450px' , lg:'430px'}} border='1.5px solid grey' mt='30px'></Divider>
          </Box>
          <Box width='550px' height='650px' ml={{sm:'40px' ,lg:'200px'}} mt={{sm:'20px' ,lg:'200px'}} flex='none'>
            <Text as='h4' fontSize='lg' color='#020231'>
              Payment Method
            </Text>
            <Divider width={{base:'420px' , lg:'430px'}} border='1.5px solid grey' mt='30px'></Divider>
            <Box width={{sm:'420px' ,lg:'550px'}} height={{sm:'30px' ,lg:'45px'}} mt={{sm:'0px' ,lg:'30px'}} border='1px solid lightgrey' borderRadius='5px'>
              <Flex>
                <Icon as={FaCreditCard} boxSize={10} ml={{sm:'90px' ,lg:'130px'}} />
                <Text ml={{sm:'30px' ,lg:'70px'}} fontSize='2xl'>Card Payment</Text>
              </Flex>
            </Box>

            <Box width={{sm:'420px' ,lg:'550px'}} height='45px' mt='30px' border='1px solid lightgrey' borderRadius='5px'>
              <Flex>
                <Icon as={FaUniversity} boxSize={10} ml={{sm:'90px' ,lg:'130px'}} />
                <Text ml='70px' fontSize='2xl'>Bank Transfer</Text>
              </Flex>
            </Box>

            <Box width={{sm:'420px' ,lg:'550px'}} height='45px' mt='30px' border='1px solid lightgrey' borderRadius='5px'>
              <Flex>
                <Icon as={FaMoneyBill} boxSize={10} ml={{sm:'90px' ,lg:'130px'}} />
                <Text ml='70px' fontSize='2xl'>Cash On Pickup</Text>
              </Flex>

              <Button colorScheme='blue' size='small' p='5' width='200px' h='8' mt='30px' ml='100px' borderRadius='20'><Link to='/RequestD3'>Proceed</Link></Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
    <Footer/>
    </Box>
  );
};

export default RequestD2;
