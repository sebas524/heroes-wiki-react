import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";

export const SpecificHero = () => {
  const { id } = useParams();
  const hero = useMemo(() => {
    return getHeroesById(id);
  }, [id]);
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/marvel");
  };

  if (!hero) {
    return <Navigate to={"/marvel"}></Navigate>;
  }

  return (
    <div className="row mt-5">
      <h1>{hero.superhero}</h1>
      <hr />
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego:</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appereance:</b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button
          className="btn btn-danger"
          onClick={goBackHandler}
        >
          go back
        </button>
      </div>
    </div>
  );
};
