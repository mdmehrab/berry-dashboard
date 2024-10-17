import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { TypeAnimation } from "react-type-animation";
import "./popularStock.scss";

const PopularStocks = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          data: [0, 240, 200, 900, 500, 700, 400],
          type: "line",
          smooth: true,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(58,77,233,0.8)" },
              { offset: 1, color: "rgba(58,77,233,0.1)" },
            ]),
          },
          lineStyle: {
            color: "#3A4DE9",
            width: 2,
          },
        },
      ],
      grid: {
        top: "10%",
        left: "0%",
        right: "0%",
        bottom: "0%",
      },
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, []);

  const stocks = [
    {
      name: "Bajaj Finery",
      price: "$1839.00",
      change: "10% Profit",
      color: "green",
    },
    { name: "TTML", price: "$100.00", change: "10% Loss", color: "red" },
    {
      name: "Reliance",
      price: "$200.00",
      change: "10% Profit",
      color: "green",
    },
    { name: "TTML", price: "$189.00", change: "10% Loss", color: "red" },
    { name: "Stolon", price: "$189.00", change: "10% Loss", color: "red" },
  ];

  return (
    <div className="popular-stocks">
      <div className="stock-card bg-light rounded p-3 mb-2">
        <h4
          style={{
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Popular
          <TypeAnimation
            sequence={[
              "Stocks",
              1000,
              "Fiber",
              2000,
              "",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="mx-1"
            style={{
              fontSize: "15px",
              display: "inline-block",
              color: "#ff0000",
            }}
          />
        </h4>
        <div ref={chartRef} style={{ height: "100px", width: "100%" }}></div>
        <div className="stock-info d-flex justify-content-between align-items-center">
          <div>
            <strong>Bajaj Finery</strong>
            <p style={{ color: "green" }}>10% Profit</p>
          </div>
          <h5>$1839.00</h5>
        </div>
      </div>

      {stocks.map((stock, index) => (
        <div
          className="stock-list-item d-flex justify-content-between align-items-center mb-2"
          key={index}
        >
          <div>
            <strong>{stock.name}</strong>
            <p style={{ color: stock.color }}>{stock.change}</p>
          </div>
          <h5>{stock.price}</h5>
        </div>
      ))}

      <div className="view-all text-center mt-3">
        <a href="#">View All</a>
      </div>
    </div>
  );
};

export default PopularStocks;
