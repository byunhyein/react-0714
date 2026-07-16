import s from "./Score.module.css";
import Btn from "./Btn";

const Score = (props) => {
  console.log(props.children);

  return (
    <>
      <div className={`bg-amber-700 mb-4 w-40 h-[500px]`}>
        <p className={s.name}>이름: {props.children}</p>
        {/* Btn(b1) */}
        <Btn $primary={true}>귀여워</Btn>
        <Btn $primary={false}>귀여워</Btn>
      </div>
    </>
  );
};
export default Score;
