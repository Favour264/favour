import React, {useState} from 'react';
import { Box, Heading, ListItem, Flex, List, Text, Divider,IconButton, useMediaQuery } from '@chakra-ui/react';
import Footer2 from '../Components/Footer2';
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
      <Heading mt='30px' ml='500px' color='#020231'>
        Request Parcel Delivery
      </Heading>
      <Flex ml='50px' justifyContent='center' direction='row'>
        <List style={{ listStyleType: 'none', padding: 5 }}>
          <Flex mt='40px'>
            <ListItem style={{ backgroundColor: '#0077B6', color: 'white', width: '90px', height: '90px', padding: '0.6em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', marginRight: '70px' }}>1</ListItem>
            <hr style={{ margin: '0 auto', border: 'none', borderBottom: '2px solid black', alignItems: 'center', width: '360px', marginTop: '110px' }}/>
            <ListItem style={{ backgroundColor: '#E6E6FA', color: '#0077B6', width: '90px', height: '90px', padding: '0.6em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', marginRight: '70px' }}>2</ListItem>
            <hr style={{ margin: '0 auto', border: 'none', borderBottom: '2px solid black', alignItems: 'center', width: '360px', marginTop: '110px' }} />
            <ListItem style={{ backgroundColor: '#0077B6', color: 'white', width: '90px', height: '90px', padding: '0.6em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', margin: '5px' }}>3</ListItem>
          </Flex>
        </List>
      </Flex>
      <Box width='550px' ml='60px' mt='60px' height='650px' color='grey'>
        <Flex>

          <Box>
            <Box width='370px' ml='60px' height='35px' bgColor='#E6E6FA'>
              <Text alignItems='Center' fontSize='lg' ml='10px'>
                Magic Land,No.1,Market Avenue,Kuje,Abuja
              </Text>
            </Box>
            <Box width='370px' ml='60px' height='35px' bgColor='#E6E6FA' mt='10'>
              <Text alignItems='Center' fontSize='lg' ml='10px'>
                Magic Land,No.1,Market Avenue,Kuje,Abuja
              </Text>
            </Box>
            <Flex align="center" justify="space-between">
              <Box>
                <Heading as="h4" fontSize="lg" ml="60px" mt="30px" flex="none" color='#020231'>
                  Ikeja
                </Heading>
                <Text ml="60px" flex="none" mt='5px'>
                  105km * 60mins
                </Text>
                <Heading as="h6" fontSize="small" ml="60px" flex="none" mt='5px' color='#020231'>
                  10m Away from you
                </Heading>
              </Box>
              <Text mr='20px' mt='10px' fontSize='4xl' color='#0077B6'>$55,000</Text>
            </Flex>

            <Divider border='1.5px solid grey' mt='30px'></Divider>

            <Flex align="center" justify="space-between">
              <Box>
                <Heading as="h4" fontSize="lg" ml="60px" mt="30px" flex="none" color='#020231'>
                  Kubwa
                </Heading>
                <Text ml="60px" flex="none" mt='5px'>
                  85km * 50mins
                </Text>
                <Heading as="h6" fontSize="small" ml="60px" flex="none" mt='5px' color='#020231'>
                  5m Away from you
                </Heading>
              </Box>
              <Text mr='20px' mt='10px' fontSize='4xl' color='#0077B6'>$10,200</Text>
            </Flex>

            <Divider border='1.5px solid grey' mt='30px'></Divider>

            <Flex align="center" justify="space-between">
              <Box>
                <Heading as="h4" fontSize="lg" ml="60px" mt="30px" flex="none" color='#020231'>
                  Area 1
                </Heading>
                <Text ml="60px" flex="none" mt='5px'>
                  11km * 5mins
                </Text>
                <Heading as="h6" fontSize="small" ml="60px" flex="none" mt='5px' color='#020231'>
                  1.8m Away from you
                </Heading>
              </Box>
              <Text mr='20px' mt='10px' fontSize='4xl' color='#0077B6'>$2,500</Text>
            </Flex>

            <Divider border='1.5px solid grey' mt='30px'></Divider>

            <Flex align="center" justify="space-between">
              <Box>
                <Heading as="h4" fontSize="lg" ml="60px" mt="30px" flex="none" color='#020231'>
                  Kuje
                </Heading>
                <Text ml="60px" flex="none" mt='5px'>
                  50km * 30mins
                </Text>
                <Heading as="h6" fontSize="small" ml="60px" flex="none" mt='5px' color='#020231'>
                  5m Away from you
                </Heading>
              </Box>
              <Text mr='20px' mt='10px' fontSize='4xl' color='#0077B6'>$8,300</Text>
            </Flex>
            <Divider border='1.5px solid grey' mt='30px'></Divider>
          </Box>
          <Box width='550px' height='650px' ml='200px' flex='none'>
            <Text as='h4' fontSize='lg' color='#020231'>
              Payment Method
            </Text>
            <Divider border='1.5px solid grey' mt='30px'></Divider>
            <Box width='550px' height='45px' mt='30px' border='1px solid lightgrey' borderRadius='5px'>
              <Flex>
                <Icon as={FaCreditCard} boxSize={10} ml='130px' />
                <Text ml='70px' fontSize='2xl'>Card Payment</Text>
              </Flex>
            </Box>

            <Box width='550px' height='45px' mt='30px' border='1px solid lightgrey' borderRadius='5px'>
              <Flex>
                <Icon as={FaUniversity} boxSize={10} ml='130px' />
                <Text ml='70px' fontSize='2xl'>Bank Transfer</Text>
              </Flex>
            </Box>

            <Box width='550px' height='45px' mt='30px' border='1px solid lightgrey' borderRadius='5px'>
              <Flex>
                <Icon as={FaMoneyBill} boxSize={10} ml='130px' />
                <Text ml='70px' fontSize='2xl'>Cash On Pickup</Text>
              </Flex>

              <Button colorScheme='blue' size='small' p='5' width='200px' h='8' mt='30px' ml='100px' borderRadius='20'><Link to='/RequestD3'>Proceed</Link></Button>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Footer2 />
    </Box>
  );
};

export default RequestD2;
