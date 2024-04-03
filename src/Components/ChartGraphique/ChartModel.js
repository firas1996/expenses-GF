import React from "react";
import Container from "./Container";

const ChartModel = ({ dataFiltre }) => {
  const chartData = [
    { month: "Jan", value: 0, nbr: 0 },
    { month: "Feb", value: 0, nbr: 0 },
    { month: "Mar", value: 0, nbr: 0 },
    { month: "Apr", value: 0, nbr: 0 },
    { month: "May", value: 0, nbr: 0 },
    { month: "Jun", value: 0, nbr: 0 },
    { month: "Jul", value: 0, nbr: 0 },
    { month: "Aug", value: 0, nbr: 0 },
    { month: "Sep", value: 0, nbr: 0 },
    { month: "Oct", value: 0, nbr: 0 },
    { month: "Nov", value: 0, nbr: 0 },
    { month: "Dec", value: 0, nbr: 0 },
  ];
  for (const item of dataFiltre) {
    chartData[item.date.getMonth()].value += item.price;
  }
  console.log(chartData);
  const values = chartData.map((el) => el.value);
  // console.log(values);
  const max = Math.max(...values);
  console.log(max);
  const total = values.reduce((x, y) => {
    return x + y;
  });
  return <Container data={chartData} max={max} total={total} />;
};

export default ChartModel;
