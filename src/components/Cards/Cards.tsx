import { truncate } from "fs";
import { useEffect, useState } from "react";
import { truncateText } from "../../utils/truncateText";

const Cards = (props: any): JSX.Element => {
    const { title, tutor, rating, price } = props;
    const [truncatetitle,settruncatetitle] = useState<string>('');
    const [truncatetutor,settruncatetutor] = useState<string>('');
    useEffect(()=>{
        settruncatetitle(truncateText(title,26));
        settruncatetutor(truncateText(tutor,15));
    },[title,tutor])
    return (
      <>
        <div
          className="bg-white md:h-72 md:w-1/4 rounded-lg h-96 w-full p-2 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 "
        >
          <div>
            <img
              src="https://img-b.udemycdn.com/course/480x270/5231088_b1e8_2.jpg"
              alt=""
              className="h-1/2 w-full bg-white rounded-md"
            />
          </div>
  
          <div className="p-3 w-full h-1/2">
            <h3 className="size-2 w-full font-semibold mb-6 font-sans">{truncatetitle}</h3>
            <h3 className="text-gray-500 mb-2">{truncatetutor}</h3>
            <div className="before:content-['₹'] font-bold size-3">100</div>

          </div>
        </div>
      </>
    );
  };
  
  export default Cards;
  