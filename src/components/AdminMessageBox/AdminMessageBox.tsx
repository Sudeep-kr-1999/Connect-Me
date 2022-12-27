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

export default function AdminMessageBox({}: Props) {
  return (
    <div className="admin-message-box relative flex h-fit m-2 p-2 justify-end items-start">
      <div className="admin-message relative flex flex-col p-4 m-2 rounded-md bg-white drop-shadow-md max-w-[50%]">
        <span className="admin-user-name relative block text-left">admin</span>
        <span className="admin-message relative block text-lg font-medium text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          obcaecati, tempore maxime inventore aspernatur veniam numquam impedit
          dolore esse velit distinctio asperiores molestias veritatis nesciunt
          voluptate! Magni, cupiditate sit. Similique fugit repellendus maxime
          rem velit quaerat reiciendis eos qui dolor quos natus cum, sit
          consequatur!
        </span>
        <span className="admin-user-time relative block text-right text-[0.8rem]">
          18:00 PM
        </span>
        <span className="seen-status relative block text-right text-[0.8rem]">
          seen
        </span>
      </div>
      <span className="admin-avatar relative block m-2 mt-4">
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
