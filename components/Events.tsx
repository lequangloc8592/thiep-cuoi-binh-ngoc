import React from "react";
import { EVENTS_BRIDE, EVENTS_GROOM } from "../constants";

const SimpleEventCard = ({ item }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-6 text-center space-y-4 bg-white">
      <h2 className="text-lg font-semibold tracking-wide">
        {item.title}
      </h2>

      {/* KHUNG 3 CỘT */}
      <div className="flex justify-center items-center gap-6 my-4">
        <div className="flex flex-col text-sm">
          <span className="uppercase">THÁNG</span>
          <span className="text-xl font-bold">{item.month}</span>
        </div>

        <div className="flex flex-col text-sm">
          <span className="uppercase">{item.weekday}</span>
          <span className="text-5xl font-bold">{item.date}</span>
        </div>

        <div className="flex flex-col text-sm">
          <span className="uppercase">NĂM</span>
          <span className="text-xl font-bold">{item.year}</span>
        </div>
      </div>

      {item.lunarDate && (
        <p className="text-xs text-gray-600 italic">
          ({item.lunarDate})
        </p>
      )}

      <p className="text-sm font-medium">Vào lúc {item.time}</p>

      <p className="text-sm font-semibold mt-2">{item.locationName}</p>
      <p className="text-sm text-gray-700">{item.address}</p>

      {item.mapLink && (
        <a
          href={item.mapLink}
          className="inline-block mt-3 px-4 py-2 text-sm rounded-full border border-gray-400 hover:bg-gray-100 transition"
          target="_blank"
        >
          Xem bản đồ
        </a>
      )}
    </div>
  );
};

const Events = () => {
  return (
    <section id="events" className="py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-10">

        {/* NHÀ GÁI */}
        {EVENTS_BRIDE.map((item, idx) => (
          <SimpleEventCard key={idx} item={item} />
        ))}

        {/* NHÀ TRAI */}
        {EVENTS_GROOM.map((item, idx) => (
          <SimpleEventCard key={idx} item={item} />
        ))}

      </div>
    </section>
  );
};

export default Events;