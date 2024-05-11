
const SearchBox = () => {
  return (
    <>
      <dialog id="search_box" className="modal modal-middle">
        <div className="modal-box">
         <input type="text" className="input input-bordered w-full mt-5" placeholder="Search here" />
         <button className="btn btn-outline mt-4 px-8">Search</button>
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
