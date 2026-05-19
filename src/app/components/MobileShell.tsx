import { Outlet, NavLink } from "react-router";
import { Home, CalendarDays, Send, Settings, Plane } from "lucide-react";

export function MobileShell() {
  return (
    <div className="bg-zinc-950 min-h-screen text-slate-50 flex justify-center items-center p-0 md:p-6 font-sans">
      <div className="w-full h-[100dvh] md:h-[844px] md:w-[390px] bg-zinc-900 md:rounded-[3rem] md:shadow-2xl md:border-[8px] border-zinc-800 overflow-hidden relative flex flex-col">
        {/* Status Bar Mock (only visible on desktop wrapper to complete illusion, or just general padding) */}
        <div className="h-12 w-full flex items-center justify-between px-6 pt-2 z-50 shrink-0 bg-zinc-900/80 backdrop-blur-md absolute top-0 left-0 right-0">
          <span className="text-xs font-medium">9:41</span>
          <div className="flex items-center space-x-2">
            <Plane className="w-3 h-3 text-emerald-400" />
            <div className="flex space-x-1">
              <div className="w-1 h-2 bg-slate-50 rounded-sm"></div>
              <div className="w-1 h-2.5 bg-slate-50 rounded-sm"></div>
              <div className="w-1 h-3 bg-slate-50 rounded-sm"></div>
              <div className="w-1 h-3.5 bg-slate-50/40 rounded-sm"></div>
            </div>
            <div className="w-5 h-2.5 border border-slate-50/30 rounded-sm relative">
              <div className="w-3 h-full bg-slate-50 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto pb-24 pt-14 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Outlet />
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full h-24 bg-zinc-900/90 backdrop-blur-xl border-t border-zinc-800 flex justify-around items-start pt-4 px-2 pb-6 z-50 rounded-b-[2.5rem]">
          <NavItem to="/app" end icon={<Home className="w-6 h-6" />} label="Home" />
          <NavItem to="/app/schedule" icon={<CalendarDays className="w-6 h-6" />} label="Agenda" />
          <NavItem to="/app/propose" icon={<Send className="w-6 h-6" />} label="Propose" />
          <NavItem to="/app/settings" icon={<Settings className="w-6 h-6" />} label="Trips" />
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label, end }: { to: string; icon: React.ReactNode; label: string; end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex flex-col items-center space-y-1 w-16 ${
          isActive ? "text-indigo-400" : "text-zinc-500 hover:text-zinc-300"
        } transition-colors`
      }
    >
      {icon}
      <span className="text-[10px] font-medium tracking-wide">{label}</span>
    </NavLink>
  );
}
