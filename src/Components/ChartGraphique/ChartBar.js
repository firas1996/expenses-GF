import "./ChartBar.css";

const ChartBar = ({ label, value }) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: "90%" }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
