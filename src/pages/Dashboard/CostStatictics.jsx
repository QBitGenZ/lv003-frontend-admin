import { Chart, registerables, defaults } from "chart.js";
import { Line } from "react-chartjs-2";

import revenueStatistics from "../../common/statisticsData/revenueData.json";
import expenseStatistics from "../../common/statisticsData/expenseData.json";

Chart.register(...registerables);

defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 25;
defaults.plugins.title.color = "black";

const CostStatistics = () => {
    const data = {
        labels: revenueStatistics.map((data) => data.label),
        datasets: [
            {
                label: "Doanh thu",
                data: revenueStatistics.map((data) => data.value),
            },
            {
                label: "Chi phí",
                data: expenseStatistics.map((data) => data.value),
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
