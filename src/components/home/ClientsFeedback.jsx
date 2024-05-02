import React from "react";
// import FeedbackCard from "@/components/feedback-card";
import { feedbackContent, clientFeedbacks } from "../../constants/Text";
import FeedbackCard from "../cards/FeedbackCard";

function ClientsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
      </div>
      <div className="grid place-items-center text-center font-semibold">
        <h2 className="mb-2 text-4xl text-blue-gray">
          {feedbackContent.title}
        </h2>
        <p className="mx-auto mb-24 w-full text-gray-500 lg:w-5/12">
          {feedbackContent.description}{" "}
        </p>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {clientFeedbacks.map((feedback, key) => (
            <FeedbackCard key={key} feedback={feedback} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsFeedback;
