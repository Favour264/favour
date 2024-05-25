import { Box, Flex, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@chakra-ui/react";


const Footer = () => {
  return (
    <Box maxWidth="100%" bg="#020231" height={{ sm:'390px' ,lg:"200px"}}>
      <Box ml="40px" pl="50px" maxWidth="90%" height="120px" borderBottom="2px solid white">
        <Flex flexDirection={{sm:'column', lg:'row'}} >
        <Flex flexDirection="column" paddingRight="200px">
          <Heading as="h3" size="small" pt="20px" color="white">
            LogiHub
          </Heading>
          <Flex mt="10px">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ color: "#ffffff", marginRight: "10px" }}
            />
            <FontAwesomeIcon
              icon={faDove}
              style={{ color: "#ffffff", margin: "0 10px" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#ffffff", marginLeft: "10px" }}
            />
          </Flex>
        </Flex>
        <Flex flexDirection="column" paddingRight="190px">
        <Heading as="h6" size="small" pt="20px" color="white">
            Company
          </Heading>
          <Text fontSize='xl' pt='0px' color="white">
                contact us
            </Text>
            </Flex>
            <Flex flexDirection="column" paddingRight="190px">
        <Heading as="h6" size="small" pt="20px" color="white">
            Legal
          </Heading>
          <Text fontSize='xl' pt='0px' color="white">
                Privacy Policy  <br></br>
                Terms Of Services
            </Text>
            </Flex>
            <Flex flexDirection="column">
        <Heading as="h6" size="small" pt="20px" color="white">
            Help
          </Heading>
          <Text fontSize='xl' pt='0px' color="white">
                Read our FAQs
            </Text>
            </Flex>
        </Flex>
      </Box>
      <Text fontSize='small' pt='0px' color="white" mt={{base:"240px" ,lg:"20px"}} ml="40px">
                Copyright@2024LogiHub.All rights reserved.
            </Text>
    </Box>
  );
};

export default Footer;
