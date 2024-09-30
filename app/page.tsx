import EventTicketGen from "./pages/EventTickerGen";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <EventTicketGen name="John Doe" />
    </>
  );
}
