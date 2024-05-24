import { Box, Heading, Text, Grid } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import photo1 from '../Images/pic1.png';
import photo2 from '../Images/pic2.png';
import photo3 from '../Images/pic3.png';
import photo4 from '../Images/pic4.png';
import photo5 from '../Images/pic5.png';
import photo6 from '../Images/pic6.png';

const Section1 = () => {
    return (
        <Box backgroundColor="#E6E6FA">
        <Box className="Content" >
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6} justifyContent="center">
                <Box className="cont1" textAlign="center">
                    <Image src={photo1} alt="picture" className='divy' height="150px" width="250px" ml="90px" />
                    <Heading as="h2" size="md" className='divvy'>Explore Various Services</Heading>
                    <Text>
                        La ville de Paris est connue pour sa beauté et son charme intemporel.
                        Chaque rue offre une atmosphère unique, imprégnée d'histoire et de culture
                    </Text>
                </Box>
                <Box className="cont2" textAlign="center">
                    <Image src={photo6} alt="picture" className='divy' height="150px" width="250px" ml="90px" />
                    <Heading as="h2" size="md" className='divvy'>Get The Best Prices</Heading>
                    <Text>
                        La ville de Paris est connue pour sa beauté et son charme intemporel.
                        Chaque rue offre une atmosphère unique, imprégnée d'histoire et de culture
                    </Text>
                </Box>
                <Box className="cont3" textAlign="center">
                    <Image src={photo3} alt="picture" className='divy' height="150px" width="250px" ml="90px" />
                    <Heading as="h2" size="md" className='divvy'>Fast Delivery Services</Heading>
                    <Text>
                        La ville de Paris est connue pour sa beauté et son charme intemporel.
                        Chaque rue offre une atmosphère unique, imprégnée d'histoire et de culture
                    </Text>
                </Box>
                <Box className="cont4" textAlign="center">
                    <Image src={photo4} alt="picture" className='divy' height="150px" width="250px" ml="90px"/>
                    <Heading as="h2" size="md" className='divvy'>Full Tracking</Heading>
                    <Text>
                        La ville de Paris est connue pour sa beauté et son charme intemporel.
                        Chaque rue offre une atmosphère unique, imprégnée d'histoire et de culture
                    </Text>
                </Box>
                <Box className="cont5" textAlign="center">
                    <Image src={photo2} alt="picture" className='divy' height="150px" width="250px" ml="90px"/>
                    <Heading as="h2" size="md" className='divvy'>Safe Packaging</Heading>
                    <Text>
                        La ville de Paris est connue pour sa beauté et son charme intemporel.
                        Chaque rue offre une atmosphère unique, imprégnée d'histoire et de culture
                    </Text>
                </Box>
                <Box className="cont6" textAlign="center">
                    <Image src={photo5} alt="picture" className='divy' height="150px" width="250px" ml="90px" />
                    <Heading as="h2" size="md" className='divvy'>Customer Services</Heading>
                    <Text>
                        La ville de Paris est connue pour sa beauté et son charme intemporel.
                        Chaque rue offre une atmosphère unique, imprégnée d'histoire et de culture
                    </Text>
                </Box>
            </Grid>
        </Box>
        </Box>
    )
}

export default Section1;
