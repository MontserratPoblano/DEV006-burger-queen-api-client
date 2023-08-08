interface OptionMenuProps {
    category: string;
    disabled?: boolean;
    handleClickMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }

const OptionMenu = ({category,handleClickMenu,disabled}:OptionMenuProps): JSX.Element => {
 
    return (
      <>
        <button id={category} onClick={handleClickMenu} disabled={disabled}  className="group relative h-11 w-21 overflow-hidden rounded-2xl bg-custom-green text-lg font-bold text-black my-1 mx-2" >
            {category}
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </>
    );
  };
  
  export default OptionMenu;