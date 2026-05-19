import { motion } from "motion/react";
import { currentContext, nextMeeting, userProfile } from "../data";
import { Clock, MapPin, Navigation, Car, AlertCircle, Clock4, CloudRain } from "lucide-react";

export function Dashboard() {
  return (
    <div className="px-6 py-4 flex flex-col gap-6 text-zinc-100 min-h-full">
      {/* Header section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Good morning,</h1>
          <h1 className="text-2xl font-light text-zinc-400">{userProfile.name}</h1>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-lg font-bold shadow-lg shadow-indigo-500/20">
          V
        </div>
      </motion.div>

      {/* Context Card (Dual Timezones) */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }}
        className="bg-zinc-800/60 rounded-3xl p-5 border border-zinc-700/50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-medium tracking-wide">{currentContext.city}</span>
          <span className="text-xs text-zinc-400 ml-auto flex items-center gap-1">
            <CloudRain className="w-3 h-3" /> {currentContext.weather}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-zinc-400 mb-1 flex justify-between">
              <span>Local Time</span>
              <span className="text-zinc-500 font-mono">{currentContext.tzAbbr}</span>
            </div>
            <div className="text-3xl font-light tabular-nums">{currentContext.timeLocal}</div>
            <div className="text-xs text-zinc-500 mt-1">{currentContext.dateLocal}</div>
          </div>
          <div className="pl-4 border-l border-zinc-700/50">
            <div className="text-xs text-zinc-400 mb-1 flex justify-between">
              <span>Home ({userProfile.homeCity})</span>
              <span className="text-zinc-500 font-mono">{currentContext.homeTzAbbr}</span>
            </div>
            <div className="text-3xl font-light tabular-nums text-zinc-400">{currentContext.homeTime}</div>
            <div className="text-xs text-zinc-500 mt-1">{currentContext.homeDate}</div>
          </div>
        </div>
      </motion.div>

      {/* Proactive Meeting Alert */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <div className="flex items-center gap-2 mb-3 px-1">
          <Clock4 className="w-4 h-4 text-emerald-400" />
          <h2 className="text-sm font-medium tracking-wide text-zinc-300 uppercase">Up Next</h2>
        </div>
        
        <div className="bg-gradient-to-b from-zinc-800 to-zinc-800/40 rounded-3xl p-5 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs font-semibold px-2 py-1 bg-zinc-700/50 rounded-md text-emerald-400 mb-2 inline-block">
                {nextMeeting.time}
              </span>
              <h3 className="text-lg font-medium">{nextMeeting.title}</h3>
              <p className="text-sm text-zinc-400">{nextMeeting.location}</p>
            </div>
          </div>

          <div className="bg-zinc-900/60 rounded-2xl p-4 flex flex-col gap-3 mb-4 border border-zinc-700/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <AlertCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-emerald-400">Leave in {nextMeeting.travel.leaveInMins} mins to be on time</p>
                <p className="text-xs text-zinc-400">Traffic is typical. {nextMeeting.travel.durationMins}m via {nextMeeting.travel.mode}.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <button className="flex items-center justify-center gap-2 bg-indigo-500 text-white py-3 rounded-xl font-medium text-sm hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20 w-full">
              <Navigation className="w-4 h-4" />
              Get Directions in Google Maps
            </button>
          </div>
        </div>
      </motion.div>

      {/* Brief Timeline Glance */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-3 px-1">
          <h2 className="text-sm font-medium tracking-wide text-zinc-400 uppercase">Later Today (JST)</h2>
        </div>
        <div className="space-y-4 px-1">
          <div className="flex gap-4">
            <div className="text-sm font-mono text-zinc-400 w-12 text-right pt-0.5">14:00</div>
            <div className="flex-1 pb-4 border-b border-zinc-800">
              <p className="text-sm font-medium">Lunch with Hoshino-san</p>
              <p className="text-xs text-zinc-500">Ginza</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-sm font-mono text-zinc-400 w-12 text-right pt-0.5">17:00</div>
            <div className="flex-1 pb-4">
              <p className="text-sm font-medium">Haneda Airport (HND)</p>
              <p className="text-xs text-zinc-500">Flight JL43 to London (LHR)</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
