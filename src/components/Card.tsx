import React from "react";
import { useAppDispatch } from "../hooks/reduxHook";
import { deleteQuote } from "../Redux/slices/quoteSlice";

interface CardProps {
  item: {
    id?: number;
    name: string;
  };
}

const Card = (props: CardProps) => {
  const dispatch = useAppDispatch()
  const { id,name } = props.item;

  const currentQoute = {
    id,
    name
  }

  return (
    <div className="p-10 group relative bg-rose-200 rounded-md">
      <div onClick={()=>dispatch(deleteQuote(currentQoute))} className="hidden  absolute bottom-5 right-5 p-2 cursor-pointer text-xl group-hover:block">
        <i className="ri-delete-bin-line text-rose-600  "></i>
      </div>
      <i className="ri-double-quotes-l ri-2x mr-5 text-rose-600"></i>
      <br />
      {name}
    </div>
  );
};

export default Card;
