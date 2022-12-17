import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import demoImage from './assets/demo.jpg';
type Props = {}
export default function TopBar({ }: Props) {
  return (
    <div className="topbar relative flex h-12 bg-topbar items-center justify-center">
      <div className="searchbox relative h-3/5 flex w-1/4 justify-center items-center bg-gray-200 rounded-md">
        <div className="icon relative icon block mr-2 text-black">
          <SearchIcon/>
        </div>
        <div className="label relative block text-black">
          <label htmlFor="search">Search</label>
        </div>
      </div>
      <div className="account-setting absolute right-4 flex justify-end">
        <div className="options-button relative text-white mr-4 item">
          <MoreHorizIcon/>
        </div>
        <div className="avatar relative text-white">
          <Avatar alt="Remy Sharp" src={demoImage} sx={{ width: 30, height: 30 }}>
            SK
          </Avatar>
        </div>
      </div>
    </div>
  )
}