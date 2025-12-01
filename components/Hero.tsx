import React from "react";
import { motion } from "framer-motion";
import { GROOM_NAME, BRIDE_NAME, WEDDING_DATE } from "../constants";

const Hero: React.FC = () => {
  const dateString = WEDDING_DATE.toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[620px] w-full overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/img/anh-bia.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex items-start md:items-center justify-center h-full px-4 pt-16 md:pt-24">
        {/* Panel kính */}
        <motion.div
          className="relative max-w-md md:max-w-2xl w-full p-6 md:p-10 text-center"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          {/* Glass box */}
          <div className="absolute inset-0 bg-white/14 border border-white/35 rounded-[28px] md:rounded-[999px] shadow-2xl" />

          {/* Inner content */}
          <div className="relative z-20 flex flex-col items-center py-8 md:py-10 px-4 md:px-8">
            {/* KHỐI SAVE THE DATE – KHÔNG DI CHUYỂN */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-3 md:mb-4"
            >
              <span className="block text-wedding-lightPink tracking-[0.3em] text-[11px] md:text-xs uppercase font-sans mb-2 font-semibold">
                Save The Date
              </span>
              <div className="w-px h-8 md:h-10 bg-wedding-pink mx-auto" />
            </motion.div>

            {/* KHỐI TÊN + NGÀY – KÉO XUỐNG ~20% */}
            <div className="flex flex-col items-center w-full mt-40 md:mt-6">
              {/* Tên chú rể */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-script font-bold text-white drop-shadow-2xl leading-tight mb-0"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9 }}
              >
                {GROOM_NAME}
              </motion.h1>

              {/* & */}
              <motion.div
                className="text-2xl md:text-3xl font-serif text-wedding-pink my-0.5 md:my-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, type: "spring" }}
              >
                &
              </motion.div>

              {/* Tên cô dâu */}
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-script font-bold text-white drop-shadow-2xl leading-tight mt-0"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.9 }}
              >
                {BRIDE_NAME}
              </motion.h2>

              {/* Ngày cưới */}
              <motion.div
                className="border-t border-b border-white/35 py-2.5 md:py-3 px-6 md:px-10 mt-6 md:mt-8"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ delay: 1.2, duration: 0.7 }}
              >
                <p className="text-sm md:text-base font-serif text-white tracking-[0.35em] md:tracking-[0.4em] uppercase">
                  {dateString}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 text-white/85 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
          Trượt xuống
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
