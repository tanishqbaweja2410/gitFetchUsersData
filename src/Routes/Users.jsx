import React, { useEffect, useState, useRef } from "react";
import Loading from "../components/Loading";
import UsersContainer from "../components/UsersContainer";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  let BaseURL = "https://api.github.com/users"
  const user = useRef('')

  async function getAllUsers() {
    if (user.current.value === "") {
      setLoading(true);
      const res = await fetch(BaseURL);
      const data = await res.json();
      // console.log(data);
      setUsers(data);
      setLoading(false);
    }
  }

  async function findUser() {
    setLoading(true);
    if (user.current.value !== '') {
      setUsers("");
      const res = await fetch(BaseURL + "/" + user.current.value);
      const data = await res.json();
      setUsers(() => [data])
      user.current.value = "";
    }
    else {
      getAllUsers();
    }
    setLoading(null);
  }

  useEffect(() => {
    getAllUsers();
  }, [setUsers])

  return <div>
    <div className="flex justify-center items-center h-11 my-5">
      <input
        type="text"
        placeholder="Search Github Users..."
        className="h-full md:w-1/3 w-2/3 text-gray-800 px-2 font-semibold outline-none"
        ref={user}
      />
      <button onClick={findUser} className="bg-sky-500 font-semibold px-4 h-full">
        Search
      </button>
    </div>
    { loading ? <Loading/> : <UsersContainer users={users} />}
  </div>
};

export default Users;
