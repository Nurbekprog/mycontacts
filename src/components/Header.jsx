import { useState } from "react";
import React from "react";
import img from "../assets/react.svg";
const Header = (props) => {
  const { handleChange, setTerm } = props;
  const [showModal, setShowModal] = React.useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, number, gender });
    setFirstName("");
    setLastName("");
    setNumber("");
    setGender("");
  };

  return (
    <div className="container md:flex gap-3 items-center bg-slate-800 justify-between ml-auto mr-auto w-100 py-3 px-20 m-0">
      <div className="flex gap-3 mb-3 items-center">
        <img className="w-16" src={img} alt="" />
        <h1 className="text-white font-bold md:text-5xl font-sans">Contacts</h1>
      </div>
      <div className="flex items-center gap-7">
        <input
          type="text"
          id="search"
          className="form-control md:w-80 p-3 mb-3 placeholder:font-bold placeholder:text-md border border-white rounded-md"
          placeholder="Search..."
          value={setTerm}
          onChange={handleChange}
        />
        <button
          onClick={() => setShowModal(true)}
          className="btn bg-blue-600 mb-2 rounded-md p-3 text-md font-bold uppercase hover:bg-blue-800 text-white"
        >
          Add Contact
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Add Contact</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-16 flex-auto">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="firstName" className="block">
                          Firstname
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="border p-2 rounded-lg"
                          placeholder="John"
                          value={firstName}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="lastName" className="block">
                          Lastname
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="border p-2 rounded-lg"
                          placeholder="Doe"
                          value={lastName}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <select
                          name="filter"
                          id="group"
                          className="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="number" className="block">
                          Number
                        </label>
                        <input
                          type="text"
                          id="number"
                          className="border p-2 rounded-lg"
                          placeholder="+998 91 270 17 06"
                          value={number}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-blue-600 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                          onClick={() => setShowModal(false)}
                        >
                          Add Contact
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
