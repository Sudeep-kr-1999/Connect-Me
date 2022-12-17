import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import DemoImage from './assets/demo.jpg'

type ChatUserProps = {
  firstName: string
  middleName?: string
  lastName: string
  avatarpath?: string
  message: string
  time: string
}

// custom styled badge for showing online status  (& is used for accessing the parent property in this case Badge)
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function ChatUser({ firstName, middleName, lastName, avatarpath, message, time }: ChatUserProps) {
  return (
    <div className="chat-user relative flex h-fit flex-1 p-2 shadow-sm rounded-sm">
      <div className="user-avatar relative w-14 mr-2 flex items-center justify-center rounded-full">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt={middleName === null || middleName === '' ? firstName + " " + lastName : firstName + " " + middleName + " " + lastName} src={avatarpath === null || avatarpath === '' ? DemoImage : avatarpath} >
            {middleName === null || middleName === '' ? firstName + " " + lastName : firstName + " " + middleName + " " + lastName}
          </Avatar>
        </StyledBadge>
      </div>
      <div className="msg-section relative flex flex-col flex-1">
        <div className="name-and-time relative flex">
          <span className="name relative flex flex-1 items-center justify-start font-sans font-semibold">
            {middleName === null || middleName === '' ? firstName + " " + lastName : firstName + " " + middleName + " " + lastName}
          </span>
          <span className="time relative flex items-center justify-end pr-2 font-sans font-semibold text-gray-900">
            {time}
          </span>
        </div>
        <div className="message-text relative flex flex-1 items-center justify-start font-sans text-gray-600">
          {message}
        </div>
      </div>
    </div>
  )
}