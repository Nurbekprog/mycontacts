import React, { useState } from "react";
import Header from "./Header";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      number: "+998 91 234 56 78",
      gender: "Male",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      number: "+998 91 234 56 78",
      gender: "Female",
    },
    {
      id: 3,
      firstName: "Tom",
      lastName: "Johnson",
      number: "+998 91 234 56 78",
      gender: "Male",
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      number: "+998 91 234 56 78",
      gender: "Male",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header handleChange={handleChange} searchTerm={searchTerm} />
      <div className="container mx-auto md:px-72 w-100 pt-3">
        <table className="table-fixed">
          <thead>
            <tr className="border-b-4">
              <th className="px-3 py-2 ">#</th>
              <th className="px-10 py-2 ">Firstname</th>
              <th className="px-10 py-2 ">Lastname</th>
              <th className="px-10 py-2 ">Number</th>
              <th className="px-10 py-2 ">Gender</th>
              <th className="px-10 py-2 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr>
                <td className="px-3 " key={contact.id}>
                  {contact.id}
                </td>
                <td className="px-10 " key={contact.firstName}>
                  {contact.firstName}
                </td>
                <td className="px-10 " key={contact.lastName}>
                  {contact.lastName}
                </td>
                <td className="px-3 " key={contact.number}>
                  {contact.number}
                </td>
                <td className="px-10 " key={contact.gender}>
                  {contact.gender}
                </td>
                <td className="px-5 flex gap-2 py-2">
                  <button className="btn bg-amber-500 transition-all font-bold uppercase text-white p-2 rounded-md hover:bg-amber-600">
                    Edit
                  </button>
                  <button className="btn bg-red-600 transition-all font-bold uppercase text-white p-2 rounded-md hover:bg-red-700" onClick={handleDeleteContact}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
