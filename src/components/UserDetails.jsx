import React, { useState, useRef } from "react";
import DeleteAllUser from "./DeleteAllUser";
import DisplayUsers from "./DisplayUsers";
import { fakeUserData } from "./../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "./../store/slices/UserSlice";
import { AiOutlinePlus } from "react-icons/ai";

const UserDetails = () => {
  const imageRef = useRef(null);
  const data2 = useSelector((state) => {
    return state.users;
  });

  const [data, setData] = useState({
    name: "",
    secondName: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    image: "",
  });
  const [list, setList] = useState(data2);
  const InputTargetValues = (e) => {
    if (e.target.type === "file") {
      setData({
        ...data,
        [e.target.name]: {
          url: createImgUrl(e.target.files[0]),
          file: e.target.files[0],
        },
      });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const dispatch = useDispatch();
  const addNewUser = (e) => {
    e.preventDefault();
    const InputValue = {
      id: list.length + 1,
      name: data.name,
      secondName: data.secondName,
      email: data.email,
      password: data.password,
      ConfirmPassword: data.ConfirmPassword,
      image: data.image,
    };

    dispatch(addUser(InputValue));
    console.log(InputValue, "list");
    setData({
      name: "",
      secondName: "",
      email: "",
      password: "",
      ConfirmPassword: "",
      image: "",
    });
  };
  const UpdateUser = () => {
    dispatch(updateUser(data));

    setData({
      name: "",
      secondName: "",
      email: "",
      image: "",
    });
  };
  const createImgUrl = (img) => {
    return URL.createObjectURL(img);
  };

  return (
    <div className="container px-5 pt-12 mx-auto">
      <div className="flex justify-between py-5">
        <h2 className="text-xl font-bold uppercase">Add user</h2>

        {/* <button
          onClick={() => addNewUser(fakeUserData())}
          type="button"
          className="rounded-md bg-indigo-500 py-1.5 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          add new user
        </button> */}
      </div>
      <div>
        <form onSubmit={addNewUser}>
          <input
            type="text"
            placeholder="type here..."
            className="w-full px-1 py-2 mb-4 border border-indigo-500 focus:outline-none"
            name="name"
            value={data.name}
            onChange={InputTargetValues}
          />
          <input
            type="text"
            placeholder="type here..."
            className="w-full px-1 py-2 mb-4 border border-indigo-500 focus:outline-none"
            name="secondName"
            value={data.secondName}
            onChange={InputTargetValues}
          />
          <input
            type="email"
            placeholder="type here..."
            className="w-full px-1 py-2 mb-4 border border-indigo-500 focus:outline-none"
            name="email"
            value={data.email}
            onChange={InputTargetValues}
          />
          <input
            type="password"
            placeholder="type here..."
            className="w-full px-1 py-2 mb-4 border border-indigo-500 focus:outline-none"
            name="password"
            value={data.password}
            onChange={InputTargetValues}
          />
          <input
            type="password"
            placeholder="type here..."
            className="w-full px-1 py-2 mb-4 border border-indigo-500 focus:outline-none"
            name="ConfirmPassword"
            value={data.ConfirmPassword}
            onChange={InputTargetValues}
          />
          <input
            type="file"
            placeholder="type here..."
            className="hidden w-full px-1 py-2 mb-4 border border-indigo-500 focus:outline-none"
            name="image"
            ref={imageRef}
            onChange={InputTargetValues}
          />
          {/* {data.image.file ? "have image" : "click to open"} */}

          <div className="relative w-14 h-14 ">
            <button
              type="button"
              onClick={() => imageRef && imageRef.current.click()}
              className={`${
                data.image.file
                  ? "bg-transparent"
                  : "bg-indigo-600 focus:ring-indigo-500 focus:outline-none focus:ring-2  focus:ring-offset-2"
              }  inline-flex justify-center items-center p-3 mx-auto w-full text-black font-bold  border border-transparent rounded-full shadow-sm  `}
            >
              <AiOutlinePlus className="text-3xl " />
            </button>
            <img
              src={data.image.url}
              alt=""
              className={`${
                data.image.file
                  ? "absolute top-0 left-0 right-0 -z-[1]"
                  : "hidden"
              } rounded-full w-14 h-14 `}
            />
          </div>
          <button
            type="submit"
            className="px-2 py-1 mt-4 mr-4 text-xl font-bold text-white bg-indigo-500 rounded-md "
          >
            SUBMIT
          </button>
          <button
            type="button"
            onClick={UpdateUser}
            className="px-2 py-1 text-xl font-bold text-white bg-indigo-500 rounded-md "
          >
            updateUser
          </button>
        </form>
      </div>
      <div>
        <DisplayUsers setData={setData} />{" "}
      </div>
      <hr />
      <div className="flex justify-end pt-4">
        <DeleteAllUser />
      </div>
    </div>
  );
};

export default UserDetails;
