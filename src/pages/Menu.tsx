
import Navbar from "../components-waitress/components-menu/Navbar";
import LeftSide from "../skeleton-components/Leftside";
import MiddleSide from "../skeleton-components/Middleside";
import RightSide from "../skeleton-components/Rightside";


interface Menu {}

const Menu = (): JSX.Element => {
  return (

   <section className="h-screen">
      <div className="flex flex-row mx-3 h-full">
        <LeftSide>
          <Navbar/>
        </LeftSide>
        <MiddleSide />
        <RightSide />
      </div>
    </section>
 
    
  );
};

export default Menu;
