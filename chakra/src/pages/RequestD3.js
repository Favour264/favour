import React, { useState } from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import {Heading,ListItem,Flex,List,Text,Divider,Button,AlertDialog,AlertDialogBody,AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from '@chakra-ui/react';
import NavBar from '../Components/Navbar3';


const RequestD3 = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const AlertDialogExample = () => {
    return (
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent width='600px' height='300px'>
            <Icon as={FontAwesomeIcon} icon={faCircleCheck} color="green.500" ml='170px' mt='20px' boxSize={20} />
              <AlertDialogHeader fontSize='4xl' fontWeight='bold' ml='60px'>
                Order Confirmed
              </AlertDialogHeader>

              <AlertDialogFooter>
              <Button ref={cancelRef}  onClick={onClose} colorScheme='blue' 
              size='small' width='350px' mr='40px' p='6' h='7' borderRadius='20' fontSize='2xl'>ok</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  };

  return (
    <Box>
      <NavBar />

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
      <Box width='370px' ml={{ sm:'10px' ,lg:'60px'}} height='35px' bgColor='lightgrey' mt='30px'>
        <Text alignItems='Center' fontSize='lg' ml='10px'>
          Magic Land, No.1, Market Avenue, Kuje
        </Text>
      </Box>
      <Box width='370px' ml={{ sm:'10px' ,lg:'60px'}}  height='35px' bgColor='lightgrey' mt='10'>
        <Text alignItems='Center' fontSize='lg' ml='10px'>
          Magic Land, No.1, Market Avenue, Kuje
        </Text>
      </Box>
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
        <Text mr='925px' mt='10px' fontSize='4xl' color='#0077B6'>$2,500</Text>
      </Flex>
      <Divider border='1.5px solid grey' width='370px' mt='20px' ml='56px'></Divider>
      <Box>
        <Flex>
          <Text ml="58px" mt='5px'>
            Payment Method
          </Text>
          <Text ml="140px" mt='5px' color='#0077B6'>
            Cash On Pickup
          </Text>
        </Flex>
        <Button colorScheme='blue' onClick={onOpen} size='small' p='5' mt='20px' h='8'
         ml='45px' width='380px' borderRadius='20'>Confirm Order</Button>
      </Box>
      <AlertDialogExample />
    </Box>
  );
};

export default RequestD3;
