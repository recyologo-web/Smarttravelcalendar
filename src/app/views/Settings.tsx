import { motion } from "motion/react";
import { Plane, Calendar, MapPin, ArrowRight } from "lucide-react";

export function Settings() {
  const upcomingTrips = [
    {
      destination: "London, UK",
      date: "May 19 - May 24",
      flight: "JL43 HND → LHR",
      tz: "GMT (+0)"
    },
    {
      destination: "Dubai, UAE",
      date: "May 25 - May 28",
      flight: "EK2 London → Dubai",
      tz: "GST (+4)"
    },
    {
      destination: "Manila, Philippines",
      date: "May 29 - Jun 5",
      flight: "EK332 DXB → MNL",
      tz: "PHT (+8)"
    }
  ];

  return (
    <div className="px-6 py-4 flex flex-col gap-6 text-zinc-100 min-h-full">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight mb-1">Upcoming Travel</h1>
        <p className="text-sm text-zinc-400">Your timezone calendar adjusts automatically based on these itineraries.</p>
      </div>

      <div className="space-y-4 relative">
        <div className="absolute left-6 top-6 bottom-6 w-px bg-zinc-800" />
        
        {upcomingTrips.map((trip, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative flex gap-4"
          >
            <div className="mt-1.5 w-12 h-12 shrink-0 bg-zinc-900 border-4 border-zinc-950 rounded-full flex items-center justify-center relative z-10">
              <Plane className="w-5 h-5 text-indigo-400" />
            </div>
            
            <div className="flex-1 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-zinc-100">{trip.destination}</h3>
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">{trip.tz}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {trip.date}
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <ArrowRight className="w-3.5 h-3.5" />
                  {trip.flight}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="mt-4 w-full py-4 border border-dashed border-zinc-700 rounded-2xl text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 transition-colors flex items-center justify-center gap-2">
        <Plane className="w-4 h-4" />
        Forward Itinerary to Sync
      </button>
    </div>
  );
}
