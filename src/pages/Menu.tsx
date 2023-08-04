import Navbar from "../components-waitress/components-menu/Navbar";
import LeftSide from "../skeleton-components/Leftside";
import MiddleSide from "../skeleton-components/Middleside";
import RightSide from "../skeleton-components/Rightside";
import WelcomeMessage from "../components-waitress/WelcomeMessage";
import Client from "../components-waitress/components-menu/Client";
import Command from "../components-waitress/Command";
import { useState } from "react";

const Menu = (): JSX.Element => {
  const [clientName, setClientName] = useState<string>("");

  const handleNameChange = (name: string) => {
    setClientName(name);
  };
  return (
    <section className="h-screen">
      <div className="flex flex-row mx-3 h-full">
        <LeftSide>
          <Navbar />
        </LeftSide>
        <MiddleSide>
          <WelcomeMessage />
          <Client setClientName={handleNameChange} />
        </MiddleSide>
        <RightSide>
          <Command clientName={clientName} />
        </RightSide>
      </div>
    </section>
  );
};
export default Menu;
