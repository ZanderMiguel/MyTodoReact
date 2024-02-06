import React from "react";

const Searchbox = ({ search, setSearch }) => {
  return (
    <>
      <form className="addSearchbox">
        <label htmlFor="addSearchbox">Search Items</label>
        <input
          id="addSearchbox"
          type="text"
          role="searchbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
};

export default Searchbox;
