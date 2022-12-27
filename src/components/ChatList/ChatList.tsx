import FilterListIcon from "@mui/icons-material/FilterList";
import ChatUser from "../ChatUser/ChatUser";
import { DemoUserData } from "../DemoData/DemoData";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { TextField } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useState } from "react";

type Props = {};
type isFilterActive = boolean;
export default function ChatList({}: Props) {
  const [isFilterActive, setisFilterActive] = useState<isFilterActive>(false);
  return (
    <div className="chatlist-menu relative flex flex-col basis-[20%] h-auto shadow-md">
      <div className="chat-bar relative flex w-full">
        {isFilterActive ? (
          <>
            <div className="filter-textfield relative flex flex-1 justify-center items-center bg-white rounded-md p-2">
              <span className="back-button relative flex items-center justify-center ml-4" onClick={()=>setisFilterActive(false)}>
                <ArrowBackRoundedIcon />
              </span>
              <div className="textfield-container relative flex flex-1 m-2 px-4 text-sm">
                <TextField
                  id="standard-basic"
                  label=""
                  variant="standard"
                  fullWidth
                  placeholder="Enter User"
                  autoFocus
                  InputProps={{ disableUnderline: true }}
                />
                <span className="clear-text-button relative flex items-center ml-4">
                  <ClearRoundedIcon />
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="chat-label-container relative flex">
              <span className="chat-label relative block text-xl italic text-black font-bold m-5">
                Messsage
              </span>
            </div>
            <div className="chat-menu-icon absolute items-center right-4 flex h-full justify-center">
              <div
                className="chat-search relative block"
                onClick={() => setisFilterActive(true)}
              >
                <FilterListIcon />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="chat-user-container relative flex flex-col">
        {DemoUserData.map((chatuser) => (
          <ChatUser
            key={chatuser.firstName}
            firstName={chatuser.firstName}
            middleName={chatuser.middleName}
            lastName={chatuser.lastName}
            avatarpath={chatuser.avatarpath}
            message={chatuser.message}
            time={chatuser.time}
          />
        ))}
      </div>
    </div>
  );
}
