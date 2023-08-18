interface RightSideProps {
  children: React.ReactNode;
}

const RightSide = ({children}:RightSideProps ): JSX.Element => {
  return (
    <div className="md:h-[calc(120vw-100px)] landscape:md:h-[calc(78vw-100px)] bg-custom-grey rounded-3xl border border-black">
      {children}
    </div>
  );
};

export default RightSide;
