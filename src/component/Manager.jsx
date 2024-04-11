import React, { useEffect, useState } from "react";
import eye from "../assets/eye.png";
function Manager() {
  const [url, setUrl] = useState(" ");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [passwordArray, setPasswordArray] = useState(() => {
    const storedPasswords = localStorage.getItem("passwords");
    return storedPasswords ? JSON.parse(storedPasswords) : [];
  });

  useEffect(() => {
    let password = localStorage.getItem("password");
    let passwordArray;
    if (password) {
      setPasswordArray(JSON.parse(password));
    }
  }, []);
  const handelClick = (e) => {
    e.preventDefault();
  };

  const savePAssword = () => {
    const newPasswordArray = [...passwordArray, { url, username, password }];
    localStorage.setItem("passwords", JSON.stringify(newPasswordArray));
    setPasswordArray(newPasswordArray);
    console.log(newPasswordArray);
  };

  return (
    <>
      <div>
        <div className="h-[110vh] absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <h1>
          {" "}
          <span className=" text-white text-2xl"> &lt; Pass </span>
          <span className=" text-white text-2xl"> OP/&gt; </span>
          <p className=" text-white mb-4"> Your Own Password Manager </p>
        </h1>
        <form onSubmit={handelClick}>
        <input
              type="text"
              className=" mb-8 rounded-lg p-2 text-black w-[80%]"
              placeholder="Enter Your website url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

          <div className=" flex text-white p-4 gap-5 justify-center ml-5 ">
            <input
              type="text"
              className=" mb-8 rounded-lg p-2 text-black w-[40%]"
              placeholder="Enter Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="text"
              className=" mb-8 rounded-lg p-2 text-black  w-[40%]"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={eye}
              alt="eye"
              className=" w-[2rem] h-[2rem] relative top-0.5 left-[-4rem]"
              onClick={handelClick}
            />
          </div>

          <button
            className="bg-purple-600 rounded-lg  w-[8rem] text-white hover:bg-purple-500"
            onClick={savePAssword}
          >
            <div className=" flex gap-4">
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              <p className="mt-1"> Password</p>
            </div>
          </button>
        </form>
      </div>
      <div className="table-div">
        <table className="table-auto w-full mt-8 text-white rounded-xl">
          <thead>
            <tr>
              <th>Site</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {passwordArray.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{item.url}</td>
                  <td className="text-center">{item.username}</td>
                  <td className="text-center">{item.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Manager;
