import { Box, Image, Flex } from "@chakra-ui/react";
import Mendable from "../Images/Medable.png";
import Chip from "../Images/Chip.png";
import Paxos from "../Images/Paxos.png";

const Body = () => {
  return (
    <Flex className="logos" bg="#E6E6FA" justify="space-around">
      <Box className="log1" width={{ base: '280px', md: '280px', lg: '380px' }} height={{ base: '60px', md: '100px', lg: '120px' }}>
        <Image className="pics" src={Mendable} alt="picture" objectFit="cover" filter="brightness(60%)" />
      </Box>
      <Box className="log2" width={{ base: '280px', md: '280px', lg: '380px' }} height={{ base: '60px', md: '100px', lg: '120px'}}>
        <Image className="pics" src={Chip} alt="picture" objectFit="cover" filter="brightness(60%)" />
      </Box>
      <Box className="log3" width={{ base: '280px', md: '280px', lg: '380px' }} height={{ base: '60px', md: '100px', lg: '120px'}}>
        <Image className="pics" src={Paxos} alt="picture" objectFit="cover" filter="brightness(60%)" />
      </Box>
    </Flex>
  );
};

export default Body;
