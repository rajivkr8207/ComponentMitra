import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  const prolinking = [
    { id: 1, name: "Profile", link: "/profile/myaccount" },
    { id: 2, name: "My Orders", link: "/profile/myorder" },
    { id: 3, name: "My Wishlist", link: "/profile/mywishlist" },
    { id: 4, name: "My Address", link: "/profile/myaddress" },
  ];
  const mobilelinking = [
    { id: 1, name: "My Orders", link: "/myorder" },
    { id: 2, name: "My Wishlist", link: "/mywishlist" },
    { id: 3, name: "My Address", link: "/myaddress" },
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen my-3">
        {/* Left side */}
        <div className="w-full lg:w-[20vw] bg-white p-4">
          <div className="text-center mb-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">John Doe</h2>
          </div>
          <ul className=" hidden lg:flex flex-col gap-5">
            {prolinking.map((item) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[--secondary-color] text-white rounded-lg"
                      : "text-black"
                  }
                  to={item.link}
                >
                  <li key={item.id}>
                    <button className="w-full text-left p-2 hover:text-white font-semibold   hover:bg-[--primary-color] rounded-lg">
                      {item.name}
                    </button>
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>

        {/* Right side */}
        <div className="flex-1 p-4 lg:p-8  w-full overflow-y-auto scrollbar-thin h-[77vh] ">
          <Outlet />
        </div>

        <div className="px-4 lg:hidden block">
          <ul className=" flex flex-col gap-1">
            {mobilelinking.map((item) => {
              return (
                <NavLink to={item.link}>
                  <li key={item.id}>
                    <button className="w-full text-left text-xl  mb-6 p-4 text-white font-semibold   bg-[--primary-color] hover:bg-[--secondary-color] rounded-lg">
                      {item.name}
                    </button>
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
