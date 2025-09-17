import { FadeLoader } from "react-spinners";
function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <FadeLoader color="#febd69" />;
    </div>
  );
}

export default Spinner;
