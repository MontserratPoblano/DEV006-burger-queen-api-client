

interface MiddleSideProps {
  children: React.ReactNode;
}

const MiddleSide = ({ children }: MiddleSideProps): JSX.Element  => {




  return (
    <div className=" mr-2 md:h-[calc(120vw-100px)] landscape:md:h-[calc(78vw-100px)] bg-custom-grey rounded-3xl border border-black">
      {children}
    </div>
  );
};

export default MiddleSide;
