import FilterListIcon from "@mui/icons-material/FilterList";
import ChatUser from "../ChatUser/ChatUser";
import { DemoUserData } from "../DemoData/DemoData";

type Props = {};

export default function ChatList({}: Props) {
  return (
    <div className="chatlist-menu relative flex flex-col basis-[20%] h-[55em] shadow-lg">
      <div className="chat-bar relative flex w-full">
        <div className="chat-label-container relative flex">
          <span className="chat-label relative block text-xl italic text-black font-bold m-5">
            Messsage
          </span>
          {/* <div className="chat-search-field">
          chat search field
        </div> */}
        </div>
        <div className="chat-menu-icon absolute items-center right-4 flex h-full justify-center">
          <div className="chat-search relative block ">
            <FilterListIcon />
          </div>
        </div>
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
