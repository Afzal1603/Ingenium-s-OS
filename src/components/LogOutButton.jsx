import { LogOut } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logToggle } from "../redux/slice/logOutSlice";

const LogOutButton = () => {
  const logout = useSelector((state) => state.logOut);
  const dispatch = useDispatch();
  return (
    <button
      className="text-white hover:cursor-pointer hover:text-slate-400 transition-all"
      title="Log off"
      onClick={() => dispatch(logToggle(logout))}
    >
      <LogOut strokeWidth={3} size={18} />
    </button>
  );
};

export default LogOutButton;
