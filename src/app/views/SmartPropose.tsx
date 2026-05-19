import { useState } from "react";
import { motion } from "motion/react";
import { Globe, Calendar, Clock, Copy, Check, Users, MapPin, Send } from "lucide-react";

export function SmartPropose() {
  const [copied, setCopied] = useState(false);
  const [selectedDay, setSelectedDay] = useState("tuesday");

  const proposedTimes = [
    { id: 1, myTime: "14:00 GMT", clientTime: "09:00 EST", date: "May 26" },
    { id: 2, myTime: "15:30 GMT", clientTime: "10:30 EST", date: "May 26" },
    { id: 3, myTime: "17:00 GMT", clientTime: "12:00 EST", date: "May 26" },
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-6 py-4 flex flex-col gap-6 text-zinc-100 min-h-full">
      <div className="mb-2">
        <h1 className="text-2xl font-semibold tracking-tight mb-1">Smart Propose</h1>
        <p className="text-sm text-zinc-400">Share availability optimized for timezones.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-zinc-800/40 border border-zinc-700/50 rounded-3xl p-5 space-y-5"
      >
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Client's Location</label>
          <div className="flex items-center gap-3 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
            <Globe className="w-5 h-5 text-indigo-400" />
            <div>
              <p className="text-sm font-medium">New York, USA</p>
              <p className="text-xs text-zinc-500">Eastern Time (EST)</p>
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Dates (Next Week)</label>
          <div className="flex gap-2">
            {["Monday", "Tuesday", "Wednesday"].map((day) => (
              <button 
                key={day}
                onClick={() => setSelectedDay(day.toLowerCase())}
                className={`flex-1 py-2 px-1 rounded-xl text-xs font-medium transition-all ${
                  selectedDay === day.toLowerCase() 
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" 
                  : "bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:bg-zinc-800"
                }`}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-2xl flex items-start gap-3">
          <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <p className="text-sm text-indigo-200">
            You'll be in <span className="font-semibold text-indigo-100">London (GMT)</span> on these dates. Times below reflect your projected timezone.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-4 mt-2">
          <h2 className="text-sm font-medium text-zinc-300">Generated Options</h2>
          <span className="text-xs text-zinc-500">Working hours only</span>
        </div>

        <div className="space-y-3">
          {proposedTimes.map((slot, idx) => (
            <motion.div 
              key={slot.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-semibold text-white">{slot.clientTime}</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-400">Client</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">{slot.myTime}</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-indigo-500/10 text-indigo-400 rounded">You</span>
                  </div>
                </div>
              </div>
              <div className="w-5 h-5 rounded border border-zinc-600 flex items-center justify-center bg-zinc-800/50">
                <Check className="w-3 h-3 text-emerald-400 opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button 
          whileTap={{ scale: 0.98 }}
          onClick={handleCopy}
          className={`w-full mt-6 py-4 rounded-2xl flex items-center justify-center gap-2 font-medium text-sm transition-all ${
            copied ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "bg-zinc-100 text-zinc-900 hover:bg-white"
          }`}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied to Clipboard" : "Copy to Clipboard"}
        </motion.button>
      </motion.div>
    </div>
  );
}
