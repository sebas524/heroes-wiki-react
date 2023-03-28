import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../shared/hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { Card } from "../components/Card";
import { AlertHeroFound, AlertHeroNotFound } from "../components";
export const Search = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { search, onInputChange } = useForm({ search: q });
  const submitHandler = (ev) => {
    ev.preventDefault();
    if (search.trim().length <= 1) {
      return;
    }

    navigate(`?q=${search.toLowerCase()}`);
  };
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row mt-4">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="search for a specific hero..."
              className="form-control"
              name="search"
              autoComplete="off"
              value={search}
              onChange={onInputChange}
            />
            <button className="btn btn-primary mt-2 float-end">Search</button>
          </form>
        </div>
        <div className="col-7 ">
          <h4>Results</h4>
          <hr />

          {q === "" ? (
            <AlertHeroFound></AlertHeroFound>
          ) : (
            heroes.length === 0 && <AlertHeroNotFound q={q}></AlertHeroNotFound>
          )}

          {heroes.map((hero) => {
            return (
              <Card
                key={hero.id}
                {...hero}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
