// ** MUI Imports
import { Box, Typography } from "@mui/material";

// ** Recharts Imports
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    TooltipProps,
    Legend,
    ResponsiveContainer,
} from "recharts";

// ** Component Imports
import HeaderChart from "./HeaderChart";

// ** Style Imports
import "./style.css";

const data = [
    {
        name: "3/4",
        p: 50,
        s: 40,
        f: 10,
    },
    {
        name: "4/4",
        p: 70,
        s: 10,
        f: 20,
    },
    {
        name: "5/4",
        p: 20,
        s: 40,
        f: 40,
    },
];

// ** Custom Tooltip recharts
const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
        return (
            <Box className="px-6 py-3 rounded-lg shadow bg-white flex flex-col-reverse">
                {payload.map((item: any) => (
                    <Box key={item.value}>
                        <Typography
                            sx={{
                                fontSize: 14,
                                fontWeight: 350,
                                color: "#535B62",
                            }}
                        >
                            {item.name}
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                color: item.fill,
                            }}
                        >
                            {item.value}%
                        </Typography>
                    </Box>
                ))}
            </Box>
        );
    }

    return null;
};

const ChartVisualizer = () => {
    return (
        <>
            <HeaderChart />
            <Box sx={{ width: "100%", height: "500px" }} className="mt-5">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        className="chart-visulizer"
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis
                            domain={[0, 100]}
                            tickFormatter={(value) => `${value}%`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar
                            dataKey="f"
                            stackId="a"
                            fill="#E3241B"
                            name="Failed"
                            barSize={60}
                        />
                        <Bar
                            dataKey="s"
                            stackId="a"
                            fill="#FBAB2C"
                            name="Skipped"
                            barSize={60}
                        />
                        <Bar
                            dataKey="p"
                            stackId="a"
                            fill="#74BF4B"
                            name="Passed"
                            barSize={60}
                        />
                        <Legend iconType="circle" />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </>
    );
};

export default ChartVisualizer;
