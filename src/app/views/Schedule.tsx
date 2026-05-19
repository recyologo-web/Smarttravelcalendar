import { motion } from "motion/react";
import { PlaneTakeoff, PlaneLanding, MapPin, Clock, Coffee, Briefcase, Moon } from "lucide-react";

const itinerary = [
  { time: "08:00", tz: "JST", event: "Breakfast Meeting", location: "Tokyo, Japan", type: "meeting", icon: Coffee },
  { time: "10:30", tz: "JST", event: "Q3 APAC Strategy Sync", location: "Marunouchi Tower", type: "meeting", icon: Briefcase },
  { time: "17:00", tz: "JST", event: "Depart HND", location: "Haneda Airport, Tokyo", type: "flight-out", icon: PlaneTakeoff },
  { type: "tz-shift", description: "Timezone shifts to GMT (London)", offset: "-8 hours" },
  { time: "22:45", tz: "GMT", event: "Arrive LHR", location: "Heathrow, London", type: "flight-in", icon: PlaneLanding },
  { time: "23:30", tz: "GMT", event: "Check-in Hotel", location: "The Savoy, London", type: "rest", icon: Moon },
];

export function Schedule() {
  return (
    <div className="px-6 py-4 flex flex-col gap-6 text-zinc-100 min-h-full">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-semibold tracking-tight">Today's Timeline</h1>
        <div className="text-sm font-medium px-3 py-1 bg-zinc-800 rounded-full text-zinc-400">
          May 19
        </div>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 space-y-8 mt-2 pb-8">
        {itinerary.map((item, index) => {
          if (item.type === "tz-shift") {
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 py-2"
              >
                <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-[4.5px] top-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-indigo-400">{item.description}</span>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-md">{item.offset}</span>
                </div>
              </motion.div>
            );
          }

          const Icon = item.icon || MapPin;
          
          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute w-3 h-3 bg-zinc-700 rounded-full border-2 border-zinc-900 -left-[6.5px] top-1" />
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-light tabular-nums">{item.time}</span>
                  <span className="text-[10px] font-mono text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded">{item.tz}</span>
                </div>
                
                <div className={`mt-1 p-4 rounded-2xl border ${item.type === 'flight-out' || item.type === 'flight-in' ? 'bg-zinc-800/80 border-zinc-700' : 'bg-zinc-900/50 border-zinc-800'}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-sm text-zinc-200">{item.event}</h3>
                      <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </p>
                    </div>
                    <div className={`p-2 rounded-full ${item.type === 'meeting' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-zinc-700/50 text-zinc-300'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
