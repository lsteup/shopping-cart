import { CiSearch } from "react-icons/ci";

const SearchBar = ({ handleInput }) => {
  return (
    <form class="max-w-3xl mx-auto mt-3 md:px-4">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <CiSearch size="1.5em" />
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border-2  border-zinc-950 bg-gray-50"
          placeholder="Search ..."
          onChange={(e) => handleInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleInput;
          }}
          class="text-zinc-50 uppercase absolute end-2.5 border-2 border-zinc-950 bottom-2.5 bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-sm text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchBar;
