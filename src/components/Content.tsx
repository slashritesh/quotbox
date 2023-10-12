import Card from "./Card";
import { useAppSelector } from "../hooks/reduxHook";
import { Rootstate } from "../Redux/store";


export interface Quote{
    id?: number,
    name : string
}

const Content = () => {

  const allquotes = useAppSelector((state : Rootstate)=> state.quote.value)


  return (
    <div className="h-screen">
      <h1 className="text-lg font-semibold mb-10">All Qoutes</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-5 grid-cols-4">
        {
          allquotes.map((singleQoute)=>{
            return <Card key={singleQoute.id} item={singleQoute}/>
          })
        }
      </div>
    </div>
  );
};

export default Content;
