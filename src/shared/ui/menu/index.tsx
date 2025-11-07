import { Link } from "react-router-dom";
import { BellIcon } from "../icons/bell-Icon";
import { MoneyIcon } from "../icons/money-icon";
import { UserIcon } from "../icons/user-icon";

export const Menu = () => {
  return (
    <menu className="rounded-b-sm shadow-sm py-6 px-6 md:px-14 bg-background border-b border-border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MoneyIcon stroke="#fff" className="w-5 h-5" />
          <h1 className="text-2xl font-bold text-white">+Finanças</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-3 relative hover:bg-primary/10 hover:glow-blue">
            <BellIcon stroke="#fff" className="w-4 h-4" />
          </button>
          <Link
            to={"/meu-perfil"}
            className="hover:cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-3 relative hover:bg-primary/10 hover:glow-blue"
          >
            <UserIcon stroke="#fff" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </menu>
  );
};
