import tumult from "tumult";

const SEED = "42";
const INPUT_FACTOR = 4;

const perlin2 = new tumult.Perlin2(SEED);
const simplex2 = new tumult.Simplex2(SEED);

/**
  Tar inn 2D-koordinater, og returnerer en verdi mellom -1 og 1.
*/
export const getNoiseValue = (x: number, y: number): number => {
  return 0;
};
