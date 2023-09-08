"use client";
import {
	YAxis,
	ResponsiveContainer,
	ComposedChart,
	CartesianGrid,
	XAxis,
	Tooltip,
	Legend,
	Area,
	Bar,
	Line,
	PieChart,
	Pie,
	Cell,
} from "recharts";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaDonate, FaIdCardAlt } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";
import React from "react";

const CustomYAxisTick = ({ x, y, payload }) => {
	const value = payload.value;
	let formattedValue = value;

	if (value >= 300) {
		formattedValue = (value / 1000).toFixed(1) + "k";
	}

	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={16}
				textAnchor="end"
				fill="#666"
				transform="rotate(-45)"
			>
				{formattedValue}
			</text>
		</g>
	);
};
/* const PieChartWithCustomizedLabel = ({ data }) => {
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		index,
	}) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central"
			>
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<PieChart width={400} height={400}>
			<Pie
				data={data}
				cx={200}
				cy={200}
				labelLine={false}
				label={renderCustomizedLabel}
				outerRadius={80}
				fill="#8884d8"
				dataKey="value"
			>
				{data.map((entry, index) => (
					<Cell
						key={`cell-${index}`}
						fill={COLORS[index % COLORS.length]}
					/>
				))}
			</Pie>
			<Tooltip />
		</PieChart>
	);
}; */

const AdminHomepage = () => {
	const { user } = useAuth();
	const { displayName } = user || {};

	const data = [
		{
			name: "Jan",
			uv: 590,
			pv: 800,
			amt: 1400,
		},
		{
			name: "Feb",
			uv: 868,
			pv: 967,
			amt: 1506,
		},
		{
			name: "Mar",
			uv: 1397,
			pv: 1098,
			amt: 989,
		},
		{
			name: "Apr",
			uv: 1480,
			pv: 1200,
			amt: 1228,
		},
		{
			name: "May",
			uv: 1520,
			pv: 1108,
			amt: 1100,
		},
		{
			name: "Jun",
			uv: 1400,
			pv: 680,
			amt: 1700,
		},
		{
			name: "Jul",
			uv: 1400,
			pv: 680,
			amt: 1700,
		},
		{
			name: "Aug",
			uv: 1400,
			pv: 680,
			amt: 1700,
		},
		{
			name: "Sep",
			uv: 1480,
			pv: 1200,
			amt: 1228,
		},
		{
			name: "Oct",
			uv: 1000,
			pv: 600,
			amt: 1500,
		},
		{
			name: "Nov",
			uv: 1400,
			pv: 680,
			amt: 1700,
		},
		{
			name: "Dec",
			uv: 590,
			pv: 800,
			amt: 1400,
		},
	];
	/* const pieChartData = [
		{ name: "Group A", value: 400 },
		{ name: "Group B", value: 300 },
		{ name: "Group C", value: 300 },
		{ name: "Group D", value: 200 },
	]; */

	return (
		<section className="w-[70%] ms-[300px]">
			<h2 className="text-3xl font-bold text-center mt-0 md:mt-10 pt-10 pb-5">
				Hi, {displayName}
			</h2>
			<div className="text-black justify-center items-center">
				<div className="stats flex  gap-6 shadow-md">
					<div className="stat flex-1 bg-blue-200 flex items-center justify-center align-middle gap-4 py-10">
						<div className="stat-figure text-secondary">
							<HiOutlineCurrencyDollar className="text-6xl" />
						</div>
						<div>
							<div className="stat-title font-extrabold text-3xl">
								Total Donation
							</div>
							<div className="stat-value">$500</div>
							<div className="stat-desc">Jan 1st - Feb 1st</div>
						</div>
					</div>

					<div className="stat flex-1 bg-green-200 flex items-center justify-center align-middle gap-4 py-1">
						<div className="stat-figure text-secondary">
							<FaDonate className="text-4xl" />
						</div>
						<div>
							<div className="stat-title font-extrabold text-3xl">
								Total Donors
							</div>
							<div className="stat-value">08</div>
							<div className="stat-desc">
								-1.8 Than last Month
							</div>
						</div>
					</div>

					<div className="stat flex-1 bg-yellow-100 flex items-center justify-center align-middle gap-4 py-10">
						<div className="stat-figure text-secondary">
							<FaIdCardAlt className="text-4xl" />
						</div>
						<div>
							<div className="stat-title font-extrabold text-3xl">
								Total Volunteers
							</div>
							<div className="stat-value">30</div>
							<div className="stat-desc"></div>
						</div>
					</div>
					<div className="stat flex-1 bg-blue-200 flex items-center justify-center align-middle gap-4 py-10">
						<div className="stat-figure text-secondary">
							<HiOutlineCurrencyDollar className="text-6xl" />
						</div>
						<div>
							<div className="stat-title font-extrabold text-3xl">
								Total Vendor
							</div>
							<div className="stat-value">10</div>
						</div>
					</div>
				</div>
				<div className="flex mt-16">
					<div className="w-[80%] mx-auto">
						<div
							style={{
								width: "100%",
								height: 500,
								backgroundColor: "#fff",
							}}
						>
							<ResponsiveContainer>
								<ComposedChart
									width={900}
									height={400}
									data={data}
									margin={{
										top: 20,
										right: 20,
										bottom: 20,
										left: 20,
									}}
								>
									<CartesianGrid stroke="#f5f5f5" />
									<XAxis dataKey="name" scale="band" />
									<YAxis tick={<CustomYAxisTick />} />
									<Tooltip />
									<Legend />
									<Area
										type="monotone"
										dataKey="amt"
										fill="#8884d8"
										stroke="#8884d8"
									/>
									<Bar
										dataKey="pv"
										barSize={20}
										fill="#413ea0"
									/>
									<Line
										type="monotone"
										dataKey="uv"
										stroke="#ff7300"
									/>
								</ComposedChart>
							</ResponsiveContainer>
						</div>
					</div>

					{/* <div className="w-[50%]">
						<div
							style={{
								width: "100%",
								height: 400,
								backgroundColor: "#fff",
							}}
						>
							<PieChartWithCustomizedLabel data={pieChartData} />
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default AdminHomepage;