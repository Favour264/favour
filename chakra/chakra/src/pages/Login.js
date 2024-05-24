import React from 'react';
import { Box, Flex, Heading, Image, Text, Input, Button, FormControl, FormLabel, VStack, Checkbox } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import pic from '../Images/rocket.png';
import {useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants';

   export default function Login(){

      const [msg,setMsg]=useState('')

    let  submit=async(e)=>{
          e.preventDefault()

          try{

            alert(" Your request has be submitted")

          await axios.post(BASE_URL,{
            msg
          })

          }
          catch(e){
              console.log(e)
          }

      }
  return (
    <Flex direction={['column', 'column', 'row']} bgColor='#020231' width={['100%', '100%', '1200px']} mx={['20px', '20px', 'auto']} mt='20px' p={['20px', '20px', '0']}>
      <Box color='black' width={['100%', '100%', '50%']}>
        <Flex justify="center" alignItems="center" mx='auto' mt={['20px', '20px', '90px']} mb={['20px', '20px', '0']}>
          <Image src={pic} alt="Rocket" width={['70%', '70%', '550px']} height={['auto', 'auto', '500px']} />
        </Flex>
      </Box>
      <Box ml={['0', '0', '40px']} mr={['0', '0', '40px']} width={['100%', '100%', '50%']}>
        <Heading as='h1' size='xl' pt='10px' color='white' textAlign={['center', 'center', 'left']} ml={['0', '0', '130px']}>
          Welcome Back!
        </Heading>
        <Text mt='5px' color='white' textAlign={['center', 'center', 'left']} ml={['0', '0', '130px']}>
          Le printemps est enfin arrivé, apportant avec lui des
        </Text>
        <Box gap='20px' mx={['auto', 'auto', 'unset']} mt={['20px', '20px', '0']} ml={['unset', 'unset', '150px']} textAlign={['center', 'center', 'left']}>
          <Box style={{ backgroundColor: 'white', display: 'inline-block', padding: '20px', marginRight: '20px' }}>
            <FontAwesomeIcon icon={faFacebookF} style={{ color: 'black' }} size='3x' />
          </Box>
          <Box style={{ backgroundColor: 'white', display: 'inline-block', padding: '20px', marginRight: '20px' }}>
            <FontAwesomeIcon icon={faApple} style={{ color: 'black' }} size='3x' />
          </Box>
          <Box style={{ backgroundColor: 'white', display: 'inline-block', padding: '20px' }}>
            <FontAwesomeIcon icon={faGoogle} style={{ color: 'black' }} size='3x' />
          </Box>
        </Box>
        <form>
          <VStack spacing={4} align="stretch" color="white" mx={['auto', 'auto', 'unset']} mt={['20px', '20px', '30px']} ml={['unset', 'unset', '130px']}>
            <FormControl id="email">
              <FormLabel>Email </FormLabel>
              <Input type="text"
              onChange={(e)=>{setMsg(e.target.value)}}
               placeholder="@gmail.com" 
               bg="transparent" />
            </FormControl>
          </VStack>

          <VStack spacing={4} align="stretch" color="white" mx={['auto', 'auto', 'unset']} mt='30px' ml={['unset', 'unset', '130px']} textAlign={['center', 'center', 'left']}>
            <FormControl id="password" action="POST">
              <FormLabel>Password</FormLabel>
              <Input type="text"
              onChange={(e)=>{setMsg(e.target.value)}}
               placeholder="Enter Your Password" />
            </FormControl>
            <Flex justify={['center', 'center', 'space-between']} alignItems="center">
              <Checkbox defaultChecked color='white'>Remember Me</Checkbox>
              <Text>Reset Password?</Text>
            </Flex>
<input 
  type="submit" 
  onClick={submit} 
  value="submit"
  style={{ backgroundColor: 'skyblue', color: 'black',
   borderRadius: 'none', marginTop: '40px',
    marginLeft: ['auto', 'auto', 'unset'] }}
/>
          </VStack>
        </form>
        <Flex justify={['center', 'center', 'unset']} mt={['20px', '20px', '20px']}>
          <Text color='white'>Don't have an account? </Text>
          <Text color="skyblue">Sign Up</Text>
        </Flex>
      </Box>
    </Flex>
  )
}


