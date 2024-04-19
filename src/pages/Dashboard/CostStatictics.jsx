import { Chart, registerables, defaults } from "chart.js";
import { Line } from "react-chartjs-2";

import revenueStatistics from "../../common/statisticsData/revenueData.json";
import expenseStatistics from "../../common/statisticsData/expenseData.json";
import { useEffect, useState } from "react";

Chart.register(...registerables);

defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 25;
defaults.plugins.title.color = "black";

const CostStatistics = () => {
    const [revenue, setRevenue] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_HOST_IP}/statistics/revenue`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // setRevenue(data);
                // console.log(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const data = {
        labels: expenseStatistics?.map((data) => data.label),
        datasets: [
            {
                label: "Doanh thu",
                data: revenueStatistics?.map((data) => data?.value),
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                text: "Doanh thu",
            },
        },
    };

    return (
        <div id='CostStatistics'>
            <Line data={data} options={options}></Line>
        </div>
    );
};

export default CostStatistics;
