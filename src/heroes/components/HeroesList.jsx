import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { Card } from "./";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => {
    return getHeroesByPublisher(publisher);
  }, [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {heroes.map((heroe) => {
        return (
          <Card
            key={heroe.id}
            {...heroe}
          ></Card>
        );
      })}
    </div>
  );
};
