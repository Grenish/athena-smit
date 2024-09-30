import Link from "next/link";


export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative overflow-hidden background">
      <h1 className="text-10xl ciko text-white relative z-10 pointer-events-none">
        ATHENA
      </h1>
      <p className="text-3xl text-white -m-10 ciko pointer-events-none">
        SMIT's Cultural Festival
      </p>
      <div className="absolute z-10 bottom-20 group">
        <Link href="/tickets">
          <button className="text-white doodles-slant text-5xl capitalize border-2 p-3 rounded-xl group-hover:animate-bounce">
            Grab your ticket now -{">"}
          </button>
        </Link>
      </div>
    </div>
  );
}
