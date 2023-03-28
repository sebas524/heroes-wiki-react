import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const knownPublishers = ["DC Comics", "Marvel Comics"];
  if (!knownPublishers.includes(publisher)) {
    throw new Error(`${publisher} not known...`);
  }
  return heroes.filter((heroe) => {
    return heroe.publisher === publisher;
  });
};
