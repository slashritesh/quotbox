import SubmitForm from "./SubmitForm";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { Rootstate } from "../Redux/store";
import {  open } from "../Redux/slices/modalSlice";

const Header = () => {
  const isModalOpen = useAppSelector((state: Rootstate) => state.modal.value);
  const count = useAppSelector((state: Rootstate) => state.quote.value);
  const dispatch = useAppDispatch();

  const handleAddQuote = () => {
    dispatch(open());
  };

  return (
    <div className="py-10 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <span className="text-rose-500">quote</span>
        Box
      </h1>

      <div className="flex items-center gap-5">
        <div className="bg-slate-200 p-2 px-5 text-sm font-medium rounded-full">
          Listed quote {count.length}
        </div>
        <button
          onClick={handleAddQuote}
          className="bg-rose-500 cursor-pointer rounded-md text-white px-4 font-semibold p-2 text-sm"
        >
          Add My Quote
        </button>
      </div>

      {isModalOpen && <SubmitForm />}
    </div>
  );
};

export default Header;
