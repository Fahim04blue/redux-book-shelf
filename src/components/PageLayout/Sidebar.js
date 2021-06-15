import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const readingListLength = useSelector((state) => {
    // console.log("state :", state.books.discoverList);
    return state.books.readingList.length;
  });
  const finishedListLength = useSelector((state) => {
    // console.log("state :", state.books.discoverList);
    return state.books.finishedList.length;
  });
  return (
    <div className="col-md-3">
      <ul className="list-group sticky-top  py-2">
        <NavLink as="li" className="list-group-item" to="/" exact>
          Discover
        </NavLink>
        <NavLink as="li" className="list-group-item" to="/reading">
          Reading List{" "}
          <span className="badge badge-sm bg-primary">{readingListLength}</span>
        </NavLink>
        <NavLink as="li" className="list-group-item" to="/finish">
          Finished Books{" "}
          <span className="badge badge-sm bg-primary">
            {finishedListLength}
          </span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
