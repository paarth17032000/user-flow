import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import MobileMenu from "../../assets/icons/MobileMenu";
import CloseIcon from "../../assets/icons/CloseIcon";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between h-[72px] bg-white md:px-16 px-10">
        <div className="text-[#222222] text-xl font-bold">User Guide</div>
        <div className="md:hidden block cursor-pointer" onClick={() => setMenu(true)}>
          <MobileMenu />
        </div>
        <div className="hidden md:flex items-center gap-8 text-[#222222] text-md">
          <NavItems />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 z-[60] h-screen w-full bg-white transform transition-transform duration-300 ease-in-out ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenu(false)}
          className="absolute top-4 right-4 text-black text-xl"
        >
          <CloseIcon size={30} />
        </button>

        {/* Menu content for mbile view */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center gap-4 text-[#222222] text-md">
            <NavItems />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItems() {
  return (
    <>
      <div className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-md font-semibold shadow-inner shadow-white/10 hover:bg-gray-100  cursor-pointer">
        About
      </div>

      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-md font-semibold shadow-inner shadow-white/10 hover:bg-gray-100">
          Options
          <ChevronDownIcon className="size-4" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 z-[62] origin-top-right rounded-xl border border-black/10 bg-white p-1 text-md transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2  rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
              User Data
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
              User Controls
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>

      <div className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-md font-semibold shadow-inner shadow-white/10 hover:bg-gray-100 cursor-pointer">
        Contact
      </div>
    </>
  );
}
