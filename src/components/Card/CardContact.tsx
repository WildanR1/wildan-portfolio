import React from "react";

type CardContactProps = {
  icon: string | any;
  title: string;
  description: string | React.ReactNode;
};

const CardContact = ({ icon, title, description }: CardContactProps) => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center px-3 text-primary">
        <div data-aos="flip-right">{icon}</div>
      </div>
      <div
        className="border-l-2 border-lm-text dark:border-dm-text px-3 py-1"
        data-aos="fade-left"
      >
        <div className="font-bold">{title}</div>
        <div className="text-neutral-400 text-sm">{description}</div>
      </div>
    </div>
  );
};

export default CardContact;
