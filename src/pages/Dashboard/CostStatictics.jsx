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
    // const [revenueStatistics, setRevenueStatistics] = useState([]);

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_HOST_IP}/orders`, {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json",
    //             Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setRevenueStatistics(data?.data);
    //             console.log("data " + data?.data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    // console.log("revenueStatistics " + revenueStatistics);

    const data = {
        labels: expenseStatistics?.map((data) => data.label),
        datasets: [
            {
                label: "Doanh thu",
                data: revenueStatistics?.map((data) => data?.value),
            },
            {
                label: "Chi phí",
                data: expenseStatistics?.map((data) => data.value),
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                text: "Doanh thu & Chi phí",
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
