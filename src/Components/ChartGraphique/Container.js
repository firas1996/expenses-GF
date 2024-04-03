import "./Container.css";
import ChartBar from "./ChartBar";

const Container = ({ data, max, total }) => {
  return (
    <div className="container">
      {data.map((item) => (
        <ChartBar
          label={item.month}
          value={item.value}
          max={max}
          total={total}
        />
      ))}
    </div>
  );
};

export default Container;
