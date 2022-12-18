import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
type Props = {};

export default function Navigation({}: Props) {
  return (
    <div className="navigation-menu relative flex flex-col basis-[5%] h-[55em]">
      <div className="uppper-nav relative flex flex-col basis-4/5 pt-3 justify-start items-center">
        <div className="notification relative block m-4">
          <NotificationsNoneRoundedIcon  className="drop-shadow-lg"/>
          <span className="notification-label relative block">Activity</span>
        </div>
        <div className="chat relative block m-4">
          <ChatBubbleOutlineRoundedIcon className="drop-shadow-lg"/>
          <span className="chat-label relative block">Chats</span>
        </div>
        <div className="calls relative block m-4">
          <CallRoundedIcon className="drop-shadow-lg" />
          <span className="calls-label relative block">Calls</span>
        </div>
      </div>
      <div className="lower-nav relative flex flex-1 flex-col justify-end items-center pb-3">
        <div className="aboutme relative m-4">
          <InfoOutlinedIcon className="drop-shadow-lg"/>
          {/* <span className="about-label relative block">About</span> */}
        </div>
        <div className="setting relative block m-4">
          <SettingsOutlinedIcon className="drop-shadow-lg" />
          {/* <span className="setting-label relative block">Setting</span> */}
        </div>
      </div>
    </div>
  );
}
