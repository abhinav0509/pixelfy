import React from "react";
import { createApi } from "unsplash-js";
import { useState } from "react";

import "../App.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const unsplash = createApi({
    accessKey: "TvWGOF_VUpfsrn4L5eFc8K4OidcWHqB1SWCQBDAPPAE",
  });

  const searchPictures = async (e) => {
    e.preventDefault();

    unsplash.search
      .getPhotos({ query: query, orientation: "landscape" })
      .then((result) => {
        //console.log(result.response.results);
        const queryResults = result.response.results;
        setPhotos(queryResults);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  };
  return (
    <div className="container">
      <form className="form" onSubmit={searchPictures}>
        <label className="label" htmlFor="query"></label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try keywords like "travel" or "india"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <div className="card-list">
        {photos.map((photo) => (
          <div className="card" key={photo.id}>
            <img
              className="card--image"
              alt={photo.alt_description}
              src={photo.urls.regular}
              width="100%"
              height="100%"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
