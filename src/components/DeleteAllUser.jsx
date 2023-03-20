import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "./../store/actions";
const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const DeleteAll = () => {
    dispatch(deleteUsers());
  };
  return (
    <div>
      <button
        onClick={DeleteAll}
        className="px-6 py-2 text-lg font-semibold text-white bg-red-500 rounded-md shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
      >
        delete all user
      </button>
    </div>
  );
};

export default DeleteAllUser;
