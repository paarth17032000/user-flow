import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import CloseIcon from "../../assets/icons/CloseIcon";

export default function UserDetailsModal({ isOpen, setIsOpen, selectedUser }) {
  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg relative bg-white p-10 rounded-[8px] ">
            <div
              onClick={() => setIsOpen(false)}
              className="w-full flex justify-end cursor-pointer absolute top-5 right-5"
            >
              <CloseIcon />
            </div>
            <div className="font-bold">{selectedUser.name}</div>
            <div className="text-gray-600">@{selectedUser.username}</div>
            <div>{selectedUser.company?.name}</div>
            <div>Email : {selectedUser.email}</div>
            <div>Phone : {selectedUser.phone}</div>
            <p> Address : {" "}
              {selectedUser.address?.street},{selectedUser.address?.city} (
              {selectedUser.address?.zipcode})
            </p>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
