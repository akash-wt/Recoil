import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "../store/atom/counterAtom";

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
  return <div>{count}</div>;
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
