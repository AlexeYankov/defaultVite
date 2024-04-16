import { Box } from '@chakra-ui/react';

export const Poke = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'flex-start'}
      flexDirection={'column'}
      gap={'30px'}
      // height={'100vh'}
    >
      <Box
        display={'flex'}
        alignItems={'flex-start'}
        justifyContent={'space-around'}
        flexDirection={'column'}
        width={'100%'}
        maxW={'1440px'}
        paddingTop={'30px'}
        gap={'30px'}
      >
        {children}
      </Box>
    </Box>
  );
};
