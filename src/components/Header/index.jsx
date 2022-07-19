import "./index.css";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="title">
          <h1>Gabriele Sozzi</h1>
          <h4>Front-End Developer</h4>
        </div>
        <div className="title-buttons">
          <Button text="Home" />
          <Button text="About" />
          <Button text="Contacts" />
        </div>
      </div>
    </>
  );
};

export default Header;
