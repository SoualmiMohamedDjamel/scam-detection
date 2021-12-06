import {Vehicle} from './types';

// eslint-disable-next-line no-promise-executor-return
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Quation Service
// This line should be deleted when we replace the mocked logique of the getCote function  by real one ( whene we use the params vehicle)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getRating = async (vehicle: Vehicle): Promise<number> => {
  await sleep(200);
  return Promise.resolve(35000);
};

// BlackList Service
export const isNotBlacklisted = async (registernumber: string): Promise<boolean> => {
  await sleep(200);
  return Promise.resolve(registernumber !== 'AA123AA');
};
