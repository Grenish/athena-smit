"use client";

import { useState } from "react";
import { IconMenu, IconX, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsContentVisible(false);
    } else {
      setIsMenuOpen(true);
      setIsContentVisible(true);
    }
  };

  const handleContentExitComplete = () => {
    if (!isContentVisible) setIsMenuOpen(false);
  };

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Register", href: "/register" },
    { title: "Events", href: "/events" },
    { title: "Developers", href: "/developers" },
  ];

  const contactItems = [
    {
      title: "Have a query?",
      content: "johndoe@gmail.com",
      href: "mailto:johndoe@gmail.com",
    },
    {
      title: "Grabbed your ticket yet?",
      content: "Grab Now",
      href: "/tickets",
      icon: <IconArrowRight className="inline ml-2" />,
    },
    { title: "Follow us on Instagram?", content: "Follow Us", href: "#" },
  ];

  return (
    <header className="p-2 px-10 absolute z-10 w-full">
      <motion.nav
        initial={false}
        animate={isMenuOpen ? { height: "96vh" } : { height: "auto" }}
        transition={{ duration: 0.3 }}
        className="p-5 bg-primary/30 backdrop-blur-md rounded-3xl flex flex-col items-center justify-between text-white border"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo athena" className="w-10" />
            <h2 className="text-3xl ml-2 ciko text-primary-foreground">
              Athena
            </h2>
          </div>
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <IconX stroke={2} className="text-primary-foreground" size={30} />
            ) : (
              <IconMenu
                stroke={2}
                className="text-primary-foreground"
                size={30}
              />
            )}
          </button>
        </div>
        <AnimatePresence onExitComplete={handleContentExitComplete}>
          {isContentVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full mt-10 h-full flex justify-between p-2 text-white"
            >
              <div className="w-1/2">
                <ul className="space-y-3">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={item.href} className="text-5xl ciko hover:underline">
                        {item.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="w-1/3 flex flex-col justify-end">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: (menuItems.length + index) * 0.1 }}
                    className="mt-5"
                  >
                    <h2 className="text-2xl ciko">{item.title}</h2>
                    <Link
                      href={item.href}
                      className="text-3xl hover:underline flex items-center gap-2"
                    >
                      {item.content}
                      {item.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
