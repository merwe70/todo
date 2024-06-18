import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`absolute top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white grid grid-cols-1 sm:w-[300px] sm:h-[200px] md:w-[500px] md:h-[400px] relative bg-cover rounded-md shadow-lg">
        <button
          className="absolute top-4 right-4 p-2 rounded-full shadow-lg border text-gray-600 hover:bg-text-800"
          onClick={() => setIsOpen(false)}
        >
          <IoMdCloseCircleOutline size={20} />
        </button>
        <div className="flex items-center justify-center p-4 rounded-md pt-12">
          <p className="text-gray-600 font-medium my-4 px-4 text-center text-2xl">
            Hadi Bişeyler Öğrenelim!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Popup;
