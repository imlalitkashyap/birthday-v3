"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        🎉✨ 𝑯𝒂𝒑𝒑𝒚 𝑩𝒊𝒓𝒕𝒉𝒅𝒂𝒚 𝑫𝒆𝒂𝒓 𝑭𝒓𝒊𝒆𝒏𝒅! ✨🎉<br />
                        🌸 𝑾𝒊𝒔𝒉𝒊𝒏𝒈 𝒚𝒐𝒖 𝒂 𝒅𝒂𝒚 𝒇𝒊𝒍𝒍𝒆𝒅 𝒘𝒊𝒕𝒉 𝒔𝒎𝒊𝒍𝒆𝒔, 𝒑𝒆𝒂𝒄𝒆 𝒂𝒏𝒅 𝒍𝒐𝒗𝒆.<br />
                        🌷 𝒀𝒐𝒖 𝒂𝒓𝒆 𝒂𝒏 𝒂𝒎𝒂𝒛𝒊𝒏𝒈 𝒑𝒆𝒓𝒔𝒐𝒏 𝒘𝒊𝒕𝒉 𝒂 𝒑𝒖𝒓𝒆 𝒉𝒆𝒂𝒓𝒕.<br />
                        💫 𝑴𝒂𝒚 𝒚𝒐𝒖𝒓 𝒚𝒆𝒂𝒓 𝒃𝒆 𝒇𝒖𝒍𝒍 𝒐𝒇 𝒏𝒆𝒘 𝒉𝒐𝒑𝒆𝒔, 𝒎𝒐𝒎𝒆𝒏𝒕𝒔 𝒂𝒏𝒅 𝒔𝒖𝒄𝒄𝒆𝒔𝒔.<br />
                        ✨ 𝑲𝒆𝒆𝒑 𝒔𝒉𝒊𝒏𝒊𝒏𝒈 ✨ 𝑲𝒆𝒆𝒑 𝒈𝒓𝒐𝒘𝒊𝒏𝒈 ✨ 𝑲𝒆𝒆𝒑 𝒃𝒆𝒊𝒏𝒈 𝒚𝒐𝒖<br />
                        🎂💖 𝑶𝒏𝒄𝒆 𝒂𝒈𝒂𝒊𝒏, 𝑯𝒂𝒑𝒑𝒚 𝑩𝒊𝒓𝒕𝒉𝒅𝒂𝒚! 💖🎂
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
