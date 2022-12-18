import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import ScreenShareRoundedIcon from "@mui/icons-material/ScreenShareRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
type Props = {};

// custom styled badge for showing online status  (& is used for accessing the parent property in this case Badge)
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function ChatBox({}: Props) {
  return (
    <div className="chat-menu relative flex flex-col flex-1 h-[55em] ">
      {/* top section  */}
      <div className="topSection relative flex justify-between p-1 px-4 items-center shadow-md">
        <div className="top-left relative flex items-center">
          <div className="top-left-first relative flex items-center">
            <span className="top-avatar relative block m-2">
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Sudeep Kumar" src="" className="drop-shadow-lg"></Avatar>
              </StyledBadge>
            </span>
            <span className="top-userName relative block m-2 text-lg font-bold">
              Sudeep Kumar
            </span>
          </div>
          <div className="top-left-second relative flex items-center">
            <span className="chats relative block m-2 text-base text-gray-700 font-semibold">
              Chat
            </span>
            <span className="files relative block m-2 text-base text-gray-700 font-semibold">
              Files
            </span>
          </div>
        </div>
        <div className="top-right relative flex items-center">
          <div className="connect-options relative flex items-center">
            <span className="call-options relative block m-2 mx-4">
              <CallRoundedIcon className="drop-shadow-lg" />
            </span>
            <span className="video-call-options relative block m-2 mx-4">
              <VideocamRoundedIcon className="drop-shadow-lg" />
            </span>
            <span className="screen-share-option relative block m-2 mx-4">
              <ScreenShareRoundedIcon className="drop-shadow-lg" />
            </span>
          </div>
          <div className="user-setting-option relative flex items-center">
            <span className="setting-button relative block m-2 mx-4">
              <MoreHorizIcon className="drop-shadow-lg" />
            </span>
          </div>
        </div>
      </div>

      {/* middle message section  */}
      <div className="message-section"></div>
      {/* lower section  */}
      <div className="lower-section"></div>
    </div>
  );
}
