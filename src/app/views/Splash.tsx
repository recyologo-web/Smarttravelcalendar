import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Globe } from "lucide-react";

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/app", { replace: true });
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-zinc-950 min-h-screen text-slate-50 flex justify-center items-center p-0 md:p-6 font-sans">
      <div className="w-full h-[100dvh] md:h-[844px] md:w-[390px] bg-zinc-900 md:rounded-[3rem] md:shadow-2xl md:border-[8px] border-zinc-800 overflow-hidden relative flex flex-col items-center justify-center">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* Logo and App Name */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-500/30 rotate-12">
              <Globe className="w-10 h-10 text-white -rotate-12" />
            </div>
            
            {/* Orbiting element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] rounded-full border border-dashed border-indigo-500/30"
            >
              <div className="absolute -top-1 left-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">SyncGlobe</h1>
            <p className="text-sm font-medium text-zinc-400">Aligning your world.</p>
          </motion.div>
        </div>
        
        {/* Loading progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-24 w-48"
        >
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              className="h-full bg-indigo-500 rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
