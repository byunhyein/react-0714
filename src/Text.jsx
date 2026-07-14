console.log("1+1");
const a = "5분 남았어";
console.log(a);

export function Text() {
  console.log(`a야${a}`);
  return <p>자식 p {a}</p>;
}
