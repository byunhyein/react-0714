import s from "./Score.module.css";
console.log(s);

const Score = (props) => {
  console.log(props.children);

  return (
    <>
      <div className={s.box}>
        <p className={s.name}>이름: {props.children}</p>
      </div>
    </>
  );
};
export default Score;
