import React from "react";
import { useSelector } from "react-redux";
// import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeUser } from "./../store/slices/UserSlice";
const DisplayUsers = ({ setData }) => {
  const dispatch = useDispatch();
  const data2 = useSelector((state) => {
    return state.users;
  });
  console.log(data2);
  const DeleteUser = (index) => {
    dispatch(removeUser(index));
  };
  const EditUser = (
    { id, name, secondName, email, password, ConfirmPassword, image },
    index
  ) => {
    setData({ id, name, secondName, password, ConfirmPassword, email, image });
  };
  return (
    <div className="py-10 mt-8 bg-gray-900 rounded-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-white">
              Users
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              A list of all the users in your account including their name,
              title, email and image.
            </p>
          </div>
        </div>
        <div className="flow-root mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-white"
                    >
                      SecondName
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-white"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-left text-sm font-semibold text-white"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {data2.map(
                    (
                      {
                        id,
                        name,
                        secondName,
                        email,
                        password,
                        ConfirmPassword,
                        image,
                      },
                      index
                    ) => (
                      <tr key={email}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-white whitespace-nowrap sm:pl-0">
                          {name}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {secondName}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-300 whitespace-nowrap">
                          {email}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-300 whitespace-nowrap">
                          <img
                            className="w-12 h-12"
                            src={image.url}
                            alt={name}
                          />
                        </td>

                        <td className="relative py-4 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                          <button
                            onClick={() =>
                              EditUser(
                                {
                                  id,
                                  name,
                                  secondName,
                                  email,
                                  password,
                                  ConfirmPassword,
                                  image,
                                },
                                index
                              )
                            }
                            type="submit"
                            className="px-2 py-1 mt-4 mr-4 text-xl font-bold text-white bg-indigo-500 rounded-md "
                          >
                            Edit
                            <span className="sr-only">, {name}</span>
                          </button>{" "}
                          <button
                            className="px-2 py-1 mt-4 text-xl font-bold text-white bg-indigo-500 rounded-md "
                            onClick={() => DeleteUser(index)}
                          >
                            Delete
                            <span className="sr-only">, {name}</span>
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayUsers;
