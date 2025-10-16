import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div style={style.container}>
        <Link to="/">
          <h1>Header components</h1>
        </Link>
      </div>
    </>
  );
}

const style = {
  container: {
    backgroundColor: "#1d293d",
    height: "50px",
    marginBottom: "20px",
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Header;
