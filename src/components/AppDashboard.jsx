import { useState } from "react";
import Header from "./Header";
import { MdLightbulbOutline } from "react-icons/md";
import Textbox from "./Textbox";

const AppDashboard = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <Header open={open} setOpen={setOpen} />

      <div className="dashboard-container grid grid-cols-[1fr_6fr] min-h-full">
        <aside
          className={`aside-container bg-transparent ${
            open ? "max-w-[280px]" : "w-14"
          } min-h-screen py-2 duration-300 `}
        >
          <div className="items">
            <div
              className={`item grid  items-center  cursor-pointer ${
                open &&
                " bg-[#feefc3] hover:bg-[#f1f3f4] grid-cols-[1fr_5fr] gap-9"
              }  rounded-r-[30px] text-[#202124] duration-200 relative `}
            >
              <MdLightbulbOutline
                onMouseOver={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className={`w-12 z-10 h-12 float-left p-3  rounded-full cursor-pointer ${
                  isActive ? "bg-[#feefc3]" : ""
                } hover:bg-[#f1f3f4] ml-3`}
              />
              <p className={`${!open && " hidden"} block duration-300`}>
                Notes
              </p>
              {/* <p className={``}>Notes</p> */}
            </div>
          </div>
        </aside>
        {/* All notes and text box will be in this part */}
        <main className="main-container flex justify-center items-start pt-7">
          <Textbox />
        </main>
      </div>
    </div>
  );
};

export default AppDashboard;
