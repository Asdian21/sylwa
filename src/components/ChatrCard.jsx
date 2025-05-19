import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ChartCard = ({ data, generalData }) => {
  const [arrayColor, setArrayColor] = useState([]);

  useEffect(() => {
    if (generalData && Array.isArray(generalData)) {
      const colors = generalData.map((item) => item.tdColor || "#8884d8"); // ✅ Default color
      setArrayColor(colors);
    }
  }, [generalData]);

  return (
    <div
      style={{ width: "100%", height: "90vh" }}
      className="bg-white rounded-2xl"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="70%"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={arrayColor[index] || "#8884d8"}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

ChartCard.propTypes = {
  data: PropTypes.array.isRequired,
  generalData: PropTypes.array.isRequired,
};

export default ChartCard;
