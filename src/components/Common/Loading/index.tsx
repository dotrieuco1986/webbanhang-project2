import "./index.css";
const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        margin: "auto",
        top: "0",
        left: "0",
        zIndex: "500",
        background: "#f2f2f2",
        opacity: "0.5",
      }}
    >
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loading;
