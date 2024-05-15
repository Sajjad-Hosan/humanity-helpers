import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SearchBox = () => {
  const { setFilter,items} = useAuth();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const result = items.filter(item => item.category === search);
    setFilter(result)
    navigate('/search_post')
  };
  return (
    <>
      <dialog id="search_box" className="modal modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              className="input input-bordered w-full mt-5"
              placeholder="Write Category Name to Search"
            />
            <button className="btn btn-outline mt-4 px-8">Search</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error px-6">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SearchBox;
