import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import demoImage from "./assets/demo.jpg";
import { TextField } from "@mui/material";
import { useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

type Props = {};
type SearchActiveState = boolean;
export default function TopBar({}: Props) {
  const [isSearchActive, setisSearchActive] =
    useState<SearchActiveState>(false);
  return (
    <div className="topbar relative flex h-14 bg-gray-50 items-center justify-center">
      {isSearchActive ? (
        // textfield
        <>
          <div className="search-textfield relative h-3/5 flex basis-1/3 justify-center items-center bg-white rounded-md drop-shadow-md">
            <span
              className="back-button relative flex items-center ml-4"
              onClick={(e) => setisSearchActive(false)}
            >
              <ArrowBackRoundedIcon />
            </span>
            <div className="textfield-container relative flex flex-1 m-2 px-4 text-sm">
              <TextField
                id="standard-basic"
                label=""
                variant="standard"
                fullWidth
                placeholder="Enter what to Search?"
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
        // searchbox
        <>
          <div
            className="searchbox relative h-3/5 flex w-1/4 justify-center items-center bg-white rounded-md drop-shadow-md"
            onClick={(e) => setisSearchActive(true)}
          >
            <div className="icon relative icon block mr-2 text-black">
              <SearchIcon />
            </div>
            <div className="label relative block text-black">
              <label htmlFor="search">Search</label>
            </div>
          </div>
        </>
      )}

      <div className="account-setting absolute right-4 flex justify-end">
        <div className="options-button relative text-black mr-4 item">
          <MoreHorizIcon />
        </div>
        <div className="avatar relative text-white">
          <Avatar
            alt="Remy Sharp"
            src={demoImage}
            sx={{ width: 30, height: 30 }}
          >
            SK
          </Avatar>
        </div>
      </div>
    </div>
  );
}
