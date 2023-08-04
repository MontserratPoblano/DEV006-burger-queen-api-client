

interface MiddleSideProps {
  children: React.ReactNode;
}

const MiddleSide = ({ children }: MiddleSideProps): JSX.Element  => {




  return (
    <div className="w-full h-full max-h-screen mr-5 bg-custom-grey rounded-3xl border border-black">
      {children}
    </div>
  );
};

export default MiddleSide;
