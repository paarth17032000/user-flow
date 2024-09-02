import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TableComponent from "./components/TableComponent";
import TilemenuIcon from "./assets/icons/Tilemenu";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import UserDetailsModal from "./components/UserDetailsModal";
import SkeletonLoader from "./components/SkeletonLoaderGrid";
import CloseIcon from "./assets/icons/CloseIcon";
function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})
  useEffect(() => {
    setLoading(true)
    async function getData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setTimeout(() => {
          setUserData(data)
          setLoading(false)
        }, 1500))
        .catch((err) => {
          console.error(err)
          setLoading(false)
        });
    }
    getData();
  }, []);
  const handleUserDetails = (user) => {
    setSelectedUser(user)
    setIsOpen(true)
  }
  return (
    <main className="min-h-screen bg-[#E5E5E5]">
      {/* navbar */}
      <Navbar />
      {/* chip component */}
      <div className="min-h-[calc(100vh-72px)]">
        <div className="flex justify-end mr-20 pt-10 py-5">
          <label className="flex items-center cursor-pointer">
            <span
              className={`mr-2 text-sm text-gray-600 ${
                isGridView && "font-bold"
              }`}
            >
              List View
            </span>
            <div
              className={`relative w-12 h-6 rounded-full cursor-pointer ${
                isGridView ? "bg-gray-400" : "bg-gray-800"
              }`}
              onClick={() => setIsGridView(!isGridView)}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  isGridView ? "translate-x-0" : "translate-x-6"
                }`}
              />
            </div>
            <span
              className={`ml-2 text-sm text-gray-600 ${
                !isGridView && "font-bold"
              }`}
            >
              Grid View
            </span>
          </label>
        </div>
        {loading ? (
          <SkeletonLoader />
        ) : !isGridView ? (
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:py-10 pb-10 md:px-20 px-10">
            {userData.map((user) => (
              <div key={user.id} onClick={() => handleUserDetails(user)} className="relative cursor-pointer col-span-1 flex flex-col items-start bg-white border-2 border-gray-600 rounded-[12px] px-6 py-4">
                <div className="font-bold">{user.name}</div>
                <div className="text-gray-600">@{user.username}</div>
                <div>{user.company.name}</div>
                <div className="absolute right-0 top-0 m-1">
                  <Popover className="relative">
                    <PopoverButton className={'outline-none'}>
                      <TilemenuIcon />
                    </PopoverButton>
                    <PopoverPanel anchor="left" className="flex flex-col bg-white border border-black/10 shadow-md px-2 py-2 rounded-[8px] font-regular">
                      <div className="font-regular hover:bg-gray-100 rounded-[8px] cursor-pointer px-4 py-1">Edit</div>
                      <div className="font-regular hover:bg-gray-100 rounded-[8px] cursor-pointer px-4 py-1">Flag</div>
                      <div className="font-regular hover:bg-gray-100 rounded-[8px] cursor-pointer px-4 py-1">Delete</div>
                    </PopoverPanel>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <TableComponent userData={userData} />
        )}
      </div>
    
      <UserDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} selectedUser={selectedUser} />
    </main>
  );
}

export default App;
