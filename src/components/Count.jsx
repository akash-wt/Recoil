import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom ,evenSelector } from "../store/atom/counterAtom";

function Count() {
  console.log("re-render");

  return (
    <div>
      <CounterValue />
      <Buttons />
    </div>
  );
}

function CounterValue() {
  const count = useRecoilValue(countAtom);
  const iseven=useRecoilValue(evenSelector);
  return(
    <div>
      <div>{count}</div>
      {iseven == 0 ? "is even" : " odd"}
    </div>
    
  );
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("re-render");

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrese
      </button>
    </div>
  );
}

export default Count;
