import { Chart, registerables, defaults } from "chart.js";
import { Bar } from "react-chartjs-2";

import userAccess from "../../common/statisticsData/userAccess.json";

Chart.register(...registerables);

defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 25;
defaults.plugins.title.color = "black";

const UserStatistics = () => {
    const data = {
        labels: userAccess.map((data) => data.label),
        datasets: [
            {
                label: "Lượt truy cập",
                data: userAccess.map((data) => data.value),
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                text: "Người dùng hoạt động",
            },
        },
    };

    return (
        <div id='UserStatistics'>
            <Bar data={data} options={options}></Bar>
        </div>
    );
};

export default UserStatistics;
