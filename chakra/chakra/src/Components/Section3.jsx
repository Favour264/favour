import React from 'react' 
import {Flex, Heading} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react';
import { Card, CardBody,Image,Stack } from '@chakra-ui/react'
import pic from '../Images/pic7.jpg'


const Section3 = () =>{
    return(
      <Box ml="30px" mb="80px">
        <Heading as='h2' size='xl' pt='70px'>
    What our clients say about us!
  </Heading>
  <Text fontSize='xl' pt='20px'>
                Paystack helps businesses in Africa get 
                <br></br>paid by anyone, anywhere in the
                world
            </Text>
            <Box ml="70px" pt='60px'>
            <Flex justify="space-around" a>
            <Card maxW='350px' boxShadow="4px 4px 10px rgba(0, 0, 0, 0.5)" >
  <CardBody>
    <Image
      filter='brightness(90%)'
      width='100px'
      height='100px'
      src={pic}
      alt='Green double couch with wooden legs'
      borderRadius='50%'
    />
    <Stack mt='6' spacing='3'>
      <Text>
      En cette journée ensoleillée, la nature s'éveille doucement de son sommeil hivernal.
       Les bourgeons éclosent, les fleurs déploient leurs pétales colorés, 
       et les arbres reverdissent.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Mart Joel
      </Text>
      <Text color='blue.600' fontSize='xl'>
        client
      </Text>
    </Stack>
  </CardBody>
  </Card>
  <Card maxW='350px' boxShadow="4px 4px 10px rgba(0, 0, 0, 0.5)">
  <CardBody>
    <Image
      filter='brightness(90%)'
      width='100px'
      height='100px'
      src={pic}
      alt='Green double couch with wooden legs'
      borderRadius='50%'
    />
    <Stack mt='6' spacing='3'>
      <Text>
      En cette journée ensoleillée, la nature s'éveille doucement de son sommeil hivernal.
       Les bourgeons éclosent, les fleurs déploient leurs pétales colorés,
        et les arbres reverdissent.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Mart Joel
      </Text>
      <Text color='blue.600' fontSize='xl'>
        client
      </Text>
    </Stack>
  </CardBody>
  </Card>
  <Card maxW='350px'  boxShadow="4px 4px 10px rgba(0, 0, 0, 0.5)">
  <CardBody>
    <Image
      filter='brightness(90%)'
      width='100px'
      height='100px'
      src={pic}
      alt='Green double couch with wooden legs'
      borderRadius='50%'
    />
    <Stack mt='6' spacing='3'>
      <Text>
      En cette journée ensoleillée, la nature s'éveille doucement de
       son sommeil hivernal. Les bourgeons éclosent,
       les fleurs déploient leurs pétales colorés, et les arbres reverdissent.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Mart Joel
      </Text>
      <Text color='blue.600' fontSize='xl'>
        client
      </Text>
    </Stack>
  </CardBody>
  </Card>
  </Flex>
            </Box>
            </Box>
    )
}

export default Section3