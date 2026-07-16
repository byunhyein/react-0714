import styled from "styled-components";
const Btn = styled.button`
  width: fit-content;
  background-color: ${(props) => (props.$primary ? "blue" : "coral")};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;
export default Btn;
