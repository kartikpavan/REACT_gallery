import React from 'react';

const Search = ({ searchText }) => {
  const [text, setText] = React.useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <main className="text-center mb-10">
      <form onSubmit={submitHandler} className="flex flex-row  justify-center">
        <input
          type="text"
          placeholder="Search Gallery"
          class="input input-bordered input-outline w-full max-w-xs rounded-r-none text-xl"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn btn-outline rounded-l-none ">
          Search{' '}
        </button>
      </form>
    </main>
  );
};

export default Search;
