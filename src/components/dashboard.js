import React, { useState } from "react";
import CardsScreen from "./cardsScreen";
import PreTest from "./preTest";

export default function Dashboard() {
  const [showMainScreen, setShowMainScreen] = useState(false);

  return (
    <div className="flex items-center bg-gradient-to-r from-[#5899E2]  to-white justify-center min-h-screen h-full">
        {showMainScreen ? (
          <CardsScreen />
        ) : (
          <div>
            <PreTest handleSubmit={() => setShowMainScreen(true)} />
          </div>
        )}
    </div>
  );
}
