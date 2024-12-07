import React, { useState } from "react";
import Pretest from "./preTest";
import CardsScreen from "./cardsScreen";

export default function Dashboard() {
  const [showMainScreen, setShowMainScreen] = useState(false);

  return (
    <div>
      {showMainScreen ? (
       <CardsScreen /> 
      ) : (
        <Pretest onComplete={() => setShowMainScreen(true)} />
      )} 
      </div>
  );
}
