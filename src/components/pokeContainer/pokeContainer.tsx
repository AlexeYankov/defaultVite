import {
  Box,
  Card,
  CardBody,
  Center,
  CloseButton,
  Text,
} from '@chakra-ui/react';

export const PokeContainer = ({
  img,
  name,
  deleteFn,
}: {
  img: string;
  name: string;
  deleteFn: () => void;
}) => {
  return (
    <Card _hover={{ bg: 'teal' }} transitionDuration="0.4s" cursor={'pointer'}>
      <CardBody>
        <Center
          display={'flex'}
          alignContent={'center'}
          justifyContent={'flex-end'}
          width={'100%'}
        >
          <CloseButton
            fill={'red'}
            stroke={'red'}
            color={'red'}
            _hover={{ bg: 'var(--chakra-colors-gray-700)' }}
            transitionDuration="0.4s"
            cursor={'pointer'}
            onClick={deleteFn}
          />
        </Center>
        <Box
          display={'flex'}
          alignItems={'flex-start'}
          justifyContent={'center'}
          flexDirection={'column'}
          gap={'20px'}
          padding={'20px'}
          // height={'100vh'}
          //   maxW={'1440px'}
        >
          <img
            src={img}
            alt=""
            style={{
              maxWidth: '300px',
              maxHeight: '300px',
              width: '300px',
              height: '300px',
            }}
          />
          {name && (
            <Center
              display={'flex'}
              paddingTop={'20px'}
              justifyContent={'space-between'}
              width={'100%'}
            >
              <Text fontSize="xl">Name: </Text>
              <Text fontSize="xl">{name}</Text>
            </Center>
          )}
        </Box>
      </CardBody>
    </Card>
  );
};
