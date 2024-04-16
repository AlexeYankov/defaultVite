import { useEffect, useState } from 'react';
import { PokeContainer } from './components/pokeContainer/pokeContainer';
import { Poke } from './components/pokes/pokes';
import { pokeApi } from './core/pokeApi/getData';
import { Box, Center, Text } from '@chakra-ui/react';
import { PokeImageType, PokeType } from './core/types';
import { pokeImage } from './constants';
import { CreatePokePanel } from './components/createPokePanel/createPokePanel';
import defaultImage from '../public/poke/pokemon-colosseum-feraligatr-1-1.avif';
import Providers from './core/config/Provider';

function App() {
  const [pokemons, setPokemons] = useState([] as Array<PokeType>);

  useEffect(() => {
    pokeApi.getPokes().then((res) => setPokemons(res.data));
  }, []);

  const [catId, setCat] = useState(0);
  const [ownerId, setownerId] = useState(0);
  const [name, setName] = useState('');

  const deleteHandler = (id: number) =>
    pokeApi.deletePoke(id).then((res) => {
      pokeApi.getPokes().then((res) => setPokemons(res.data));
    });

  const createPokeHandler = () => {
    const data = { name, catId, ownerId };
    pokeApi.createPoke(data).then((res) => {
      pokeApi.getPokes().then((res) => {
        resetForm();
        setPokemons(res.data);
      });
    });
  };

  const resetForm = () => {
    setName('');
    setownerId(0);
    setCat(0);
  };
  return (
    <Providers>
      <Center paddingTop={'20px'}>
        <Text fontSize="6xl">Simple Poke App</Text>
      </Center>
      <Poke>
        <CreatePokePanel
          name={name}
          ownerId={ownerId}
          catId={catId}
          setCat={setCat}
          setName={setName}
          setownerId={setownerId}
          createPokeHandler={createPokeHandler}
        />

        <Box
          display={'flex'}
          alignItems={'flex-start'}
          justifyContent={'space-evenly'}
          gap={'5%'}
          id="fergerr"
          onClick={() => ''}
          flexWrap={'wrap'}
          marginBottom={'60px'}
          // py={'20px'}
        >
          {pokemons.map((el, i) => {
            let image = defaultImage;
            if (Object.getOwnPropertyNames(pokeImage).includes(el.name)) {
              image = pokeImage[el.name as keyof PokeImageType];
            }
            return (
              <PokeContainer
                key={i}
                img={image}
                name={el.name}
                deleteFn={() => deleteHandler(el.id)}
              />
            );
          })}
        </Box>
      </Poke>
    </Providers>
  );
}

export default App;
