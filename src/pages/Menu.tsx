import MenuComponent from "../components-waitress/components-menu/Menu"
import Client from "../components-waitress/components-menu/Client"



interface Menu {
  
}

const Menu = (): JSX.Element => {
  return (
    <>
   <MenuComponent/>
   <Client />
      
    </>
  );

}


export default Menu;