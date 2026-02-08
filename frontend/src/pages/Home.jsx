import React from "react";

const Home = () => {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl w-full">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Smarter Rides, Together
          </h2>

          <p className="opacity-80 mb-8 max-w-2xl">
            Join our carpooling community and enjoy affordable,
            safe, and eco-friendly travel options.
          </p>

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Location"
              className="flex-1 p-4 rounded-xl bg-black/30 border border-white/20 outline-none"
            />

            <input
              type="text"
              placeholder="Destination"
              className="flex-1 p-4 rounded-xl bg-black/30 border border-white/20 outline-none"
            />

            <button className="bg-[#350a72] hover:bg-[#4a0ea3] px-6 py-4 rounded-xl font-bold">
              Search
            </button>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About CoRide</h2>
          <p className="opacity-80">
            CoRide is a community-driven carpooling platform designed
            to reduce travel costs, ease traffic congestion, and
            promote sustainable commuting.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
