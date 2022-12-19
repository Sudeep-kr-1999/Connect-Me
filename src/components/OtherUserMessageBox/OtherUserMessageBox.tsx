import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
type Props = {};
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

export default function OtherUserMessageBox({}: Props) {
  return (
    <div className="otheruser-message-box relative flex h-fit m-2 p-2 justify-end items-center ">
      <span className="other-message relative block p-2 m-1 rounded-md">
        other message
      </span>
      <span className="otheruser-avatar relative block m-1">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Sudeep Kumar" src="" className="drop-shadow-lg"></Avatar>
        </StyledBadge>
      </span>
    </div>
  );
}
