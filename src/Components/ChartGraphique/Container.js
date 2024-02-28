import "./Container.css";
import ChartBar from "./ChartBar";

const Container = ({ data }) => {
  return (
    <div className="container">
      {data.map((item) => (
        <ChartBar label={item.month} value={item.value} />
      ))}
    </div>
  );
};

export default Container;
