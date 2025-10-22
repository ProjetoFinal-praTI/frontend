import { BellIcon } from "../Icons/BellIcon";
import { MoneyIcon } from "../Icons/MoneyIcon";
import { UserIcon } from "../Icons/UserIcon";
import { Icon } from "../Icons"; 

export const Menu = () => {
  return (
    <menu className="rounded-b-sm shadow-sm py-6 px-6 md:px-14 bg-background border-b border-border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* 2. Use o wrapper <Icon> */}
          <Icon icon={<MoneyIcon />} size="md" variant="default" />
          <h1 className="text-2xl font-bold text-white">IntelliFin</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-3 relative hover:bg-primary/10 hover:glow-blue">
            {/* 3. Use o wrapper <Icon> (size="sm" equivale a w-4 h-4) */}
            <Icon icon={<BellIcon />} size="sm" variant="default" />
          </button>
          <button className="hover:cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-3 relative hover:bg-primary/10 hover:glow-blue">
            {/* 4. Use o wrapper <Icon> (size="sm" equivale a w-4 h-4) */}
            <Icon icon={<UserIcon />} size="sm" variant="default" />
          </button>
        </div>
      </div>
    </menu>
  );
};