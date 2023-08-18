import { ReactNode } from 'react'; 
interface LeftSideProps {
  children: ReactNode; // Define children como ReactNode porque puede contener uno o varios elementos JSX.
}

const LeftSide = ({ children }: LeftSideProps): JSX.Element => {
  return (
    <div className="w-8/12 md:h-[calc(120vw-100px)] landscape:md:h-[calc(78vw-100px)] mr-5 bg-custom-grey rounded-3xl border border-black">
      {children}
    </div>
  );
};

export default LeftSide;
