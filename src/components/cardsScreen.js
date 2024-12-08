import React from "react";
import { MdWavingHand, MdTrackChanges } from "react-icons/md";
import { GiStaticWaves } from "react-icons/gi";
import { RxMix } from "react-icons/rx";
import { MdOutlineDynamicForm } from "react-icons/md";

export default function CardsScreen() {
  const cards = [
    {
      title: "Adaptive",
      icon: <MdTrackChanges />,
    },
    {
      title: "Static",
      icon: <GiStaticWaves />,
    },
    {
      title: "Mixed",
      icon: <RxMix />,
    },
    {
      title: "Adaptable",
      icon: <MdOutlineDynamicForm />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <div className="bg-pepsi-blue p-3 rounded-lg">
          <MdWavingHand className="text-3xl text-white" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-lg font-medium text-gray-500">
            مرحبًا، فهد زهير
          </h1>
          <p className="text-2xl leading-8 font-bold text-gray-600">
            هل يمكنني مساعدتك في شيء؟
          </p>
          <p className="text-sm w-3/4 text-center text-gray-500 ">
            جاهز لمساعدتك في أي شيء تحتاجه، من الإجابة على الأسئلة إلى تقديم التوصيات. دعنا نبدأ!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex gap-x-2 items-center bg-white p-4 rounded-lg shadow-md w-60 cursor-pointer transition-transform duration-300 hover:translate-x-2"
          >
            <div className="bg-pepsi-blue flex items-center text-lg justify-center w-8 h-8 rounded-md text-white ">
              {card.icon}
            </div>
            <div>
              <p className="font-semibold ">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
