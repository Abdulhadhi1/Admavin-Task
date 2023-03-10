
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

export const Infinite = () => {


  const [State, Setstate] = useState (Array.from({length:20}))
  const [hasMore, setHasMore] = useState(true)
  const Moredata=()=>{
    setTimeout(() => {
      
      Setstate(State.concat(Array.from({length:20})))

    }, 500)
    

  }

  return (
    <div>
      <h1>Infinite scroll</h1>

      <InfiniteScroll dataLength={State.length} next={Moredata} hasMore={hasMore}>
        {State.map((item, index)=>{
          return <div className="scroll">This is Infinite scroll{index + 1}</div>
        })}
 
      </InfiniteScroll>
    </div>
  );
};
