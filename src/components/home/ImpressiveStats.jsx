// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  impressiveSatsContent,
  impressiveStatistics,
} from "../../constants/Text";

function ImpressiveStats() {
  return (
    <section className="px-8 pt-4 font-semibold mb-16">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <h2 className="mb-2 text-4xl text-blue-gray">
            {impressiveSatsContent.title}
          </h2>
          <p className="mx-auto mb-24 w-full text-gray-500 lg:w-5/12">
            {impressiveSatsContent.description}
          </p>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {impressiveStatistics.map((statistic, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-4xl text-blue-gray">{statistic.count}</span>
              <span className="text-gray-500">{statistic.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpressiveStats;
