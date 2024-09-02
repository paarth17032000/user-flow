import React from 'react'

export default function TableComponent({userData}) {
  return (
    <div className="md:px-20 px-10">
    <div className="bg-white p-2 rounded-[8px]">
      <div className="overflow-x-auto rounded-[8px] custom-scrollbar">
        <table className="min-w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">Website</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Zipcode</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr
                key={user.id}
                className={`whitespace-nowrap border-b ${
                  user.id % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                }`}
              >
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name.split(" ")[0]}</td>
                <td className="px-4 py-2">{user.name.split(" ")[1]}</td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.phone}</td>
                <td className="px-4 py-2">{user.company.name}</td>
                <td className="px-4 py-2">{user.website}</td>
                <td className="px-4 py-2">{user.address.city}</td>
                <td className="px-4 py-2">{user.address.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
