import { toastWrapper } from '@/components/toast/toastWrapper';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://localhost:7214/',
  // headers: {'x-auth-skip': true},
});

export const pokeApi = {
  getPokes() {
    return instance.get('poke');
  },
  deletePoke(id: number) {
    return instance.delete('poke/' + id);
  },
  createPoke({
    catId,
    ownerId,
    name,
  }: {
    name: string;
    ownerId: number;
    catId: number;
  }) {
    return instance
      .post(`poke?ownerId=${ownerId}&catId=${catId}`, {
        name: `${name}`,
        birthDate: '2024-04-15T18:25:09.500Z',
      })
      .then((res) => {
        if (res.status === 200) {
          toastWrapper('Successfully created');
          pokeApi.getPokes();
        } else {
          toastWrapper('Successfully failed', true);
        }
      });
  },
};
