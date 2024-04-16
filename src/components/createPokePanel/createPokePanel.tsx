import { Box, Button, Input } from '@chakra-ui/react';

type CreatePokePanelType = {
  name: string;
  catId: number;
  ownerId: number;
  setCat: (value: number) => void;
  setName: (value: string) => void;
  setownerId: (value: number) => void;
  createPokeHandler: () => void;
};

export const CreatePokePanel = (prop: CreatePokePanelType) => {
  const {
    name,
    catId,
    ownerId,
    setCat,
    setName,
    setownerId,
    createPokeHandler,
  } = prop;
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      gap={'20px'}
      width={'100%'}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        gap={'20px'}
        justifyContent={'space-between'}
      >
        <Input
          value={name}
          placeholder="Enter Name"
          maxW={'250px'}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <Input
          value={catId ? catId : ''}
          placeholder="Enter Category"
          type="number"
          maxW={'150px'}
          onChange={(e) => setCat(+e.currentTarget.value)}
        />
        <Input
          value={ownerId ? ownerId : ''}
          placeholder="Enter OwnerId"
          type="number"
          maxW={'150px'}
          onChange={(e) => setownerId(+e.currentTarget.value)}
        />
      </Box>
      <Button colorScheme="teal" onClick={createPokeHandler} paddingX="10">
        Create pokemon
      </Button>
    </Box>
  );
};
