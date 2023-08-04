interface RightSideProps {
  children: React.ReactNode;
}

const RightSide = ({children}:RightSideProps ): JSX.Element => {
  return (
    <div className="w-11/12 h-full max-h-screen  bg-custom-grey rounded-3xl border border-black">
      {children}
    </div>
  );
};

export default RightSide;
