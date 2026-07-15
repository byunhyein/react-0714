import "./Picture.css";
const Picture = (props) => {
  return (
    <div className="picture-wrap">
      <span className="picture-label">image</span>
      <img className="picture-img" src="http://qwerew.cafe24.com/images/pet-3.jpg" alt="" />
    </div>
  );
};
export default Picture;
