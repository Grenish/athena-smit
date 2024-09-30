"use client";

import { useState, FormEvent, useRef } from "react";
import CustomCheckbox from "@/app/components/Checkbox";
import EventTicketGen from "@/app/components/EventTicketGen";
import {
  IconUser,
  IconMail,
  IconDownload,
  IconShare,
} from "@tabler/icons-react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";

export default function Tickets() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [ticketName, setTicketName] = useState("");
  const ticketRef = useRef(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setTicketName(name);
    setIsLoading(false);
    setShowTicket(true);
  };

  const dropInVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
        duration: 0.8,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
        duration: 0.8,
      },
    },
  };

  const handleDownload = async () => {
    if (ticketRef.current) {
      const canvas = await html2canvas(ticketRef.current, {
        useCORS: true,
      });
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "Athena2024_Ticket.png";
      link.click();
    }
  };

  const handleShare = async () => {
    if (ticketRef.current) {
      const canvas = await html2canvas(ticketRef.current, {
        useCORS: true,
      });
      canvas.toBlob(async (blob) => {
        if (blob) {
          const file = new File([blob], "Athena2024_Ticket.png", {
            type: "image/png",
          });
          const shareData = {
            files: [file],
            title: "My Athena 2024 Ticket",
            text: "I just received my ticket for Athena 2024, grab yours as well!",
          };

          if (navigator.share && navigator.canShare(shareData)) {
            try {
              await navigator.share(shareData);
            } catch (error) {
              console.error("Error sharing:", error);
            }
          } else {
            alert(
              "Web Share API is not supported in your browser. You can manually share the downloaded image."
            );
          }
        }
      }, "image/png");
    }
  };

  return (
    <div className="h-screen flex items-center background2">
      <div className="ml-10 text-white bg-[#ffffff1f] backdrop-blur-md w-1/2 p-5 rounded-2xl relative overflow-hidden">
        <h2 className="ciko capitalize text-5xl">Grab your ticket now!</h2>
        <div className="w-full mt-2">
          <p>
            With Athena's launch just around the corner, excitement is building
            everywhere! Whether you're participating or simply soaking in the
            atmosphere, everyone at SMIT is eagerly anticipating this fest. To
            make the most of your experience, keep exploring and dive into all
            it has to offer.
          </p>
          <p>
            Don't forget—generate your ticket now and get ready for the
            festivities!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 w-1/2">
          <div className="border-b flex items-center gap-1">
            <IconUser stroke={2} />
            <input
              type="text"
              className="p-2 outline-none bg-transparent w-full text-xl"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="border-b flex items-center gap-1 mt-5">
            <IconMail stroke={2} />
            <input
              type="email"
              className="p-2 outline-none bg-transparent w-full text-xl"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="text-sm">If you want the ticket to your mail</p>
          <button
            type="submit"
            className="mt-5 p-2 border rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Let's Gooo
          </button>
        </form>

        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-[#2f2f2f6c] backdrop-blur-3xl z-[99] flex flex-col items-center justify-center"
            >
              <span className="loader"></span>
              <p className="mt-5">Just Looking Around...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="text-white w-1/2 h-full p-5 flex items-center justify-center">
        <AnimatePresence>
          {showTicket && (
            <motion.div
              variants={dropInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-1/2"
            >
              <Tilt options={{ max: 25, scale: 1.05 }}>
                <div ref={ticketRef}>
                  <EventTicketGen name={ticketName} width="w-full" />
                </div>
              </Tilt>
              <div className="mt-4 flex justify-center space-x-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <IconDownload size={20} />
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <IconShare size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
