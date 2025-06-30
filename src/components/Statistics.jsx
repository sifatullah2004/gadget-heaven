import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import PageTitle from "./PageTitle";
import Heading from "./Heading";

const Statistics = () => {
  const products = useLoaderData();
  console.log(products);

  return (
   <div>
     <PageTitle title={"Statistics"}></PageTitle>
      <div className="bg-[#9538E2] text-white pb-9">
        <Heading
          title={"Statistics"}
          subtitle={
            "Just take a look at the statistics of price and rating of all products existed in the home page."
          }
        ></Heading>
      </div>
     <div className="w-11/12 mx-auto">
      <h1 className="text-3xl mb-7 font-bold">Statistics</h1>
      <div >
        {/* <ResponsiveContainer> */}
          <ComposedChart
            
            width={1000}
            height={400}
            data={products}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="rating" stroke="#ff7300" />
            <Scatter dataKey="price" fill="red" />
          </ComposedChart>
        {/* </ResponsiveContainer> */}
      </div>
    </div>
   </div>
  );
};

export default Statistics;
