import { TbAlertCircleFilled } from "react-icons/tb";

interface ModalProps {
  handleCloseClick: () => void;
  handleDeleteItemClick: () => void;
  showModal: boolean;
}

function Modal({ handleCloseClick, showModal, handleDeleteItemClick }: ModalProps) {
  if (!showModal) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[500px] flex flex-col">
          <div className="bg-custom-grey p-2 rounded ">
            <div className="flex justify-end">
              <button
                className="text-black text-[20px] font-semibold place-self-end  pr-5"
                onClick={handleCloseClick}
              >
                X
              </button>
            </div>
            <div className="flex justify-center">
              <TbAlertCircleFilled
                style={{ color: "#F9B209", fontSize: "40px" }}
              />
            </div>
            <h3 className="text-center text-[20px] my-4">
              ¿Quieres eliminar este item?
            </h3>
            <div className="flex justify-center my-5">
              <button onClick={handleDeleteItemClick}className="rounded-full border-black my-3 h-10 text-lg bg-custom-green w-20 mx-5 font-semibold">
                Si
              </button>
              <button
                onClick={handleCloseClick}
                className="rounded-full border-black my-3 text-lg bg-custom-red w-20 mx-5 font-semibold"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
