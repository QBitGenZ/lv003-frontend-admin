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

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

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
                setRevenue(data?.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const getStatisticWithDate = (startDate, endDate) => {
        fetch(
            `${process.env.REACT_APP_HOST_IP}/statistics/revenue?startDate=${startDate}&endDate=${endDate}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setRevenue(data?.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const convertDate = (inputDate) => {
        return new Date(inputDate).toISOString().split("T")[0];
    };

    const data = {
        labels: Object.keys(revenue),
        datasets: [
            {
                label: "Doanh thu",
                data: Object.values(revenue),
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                text: "Doanh thu",
            },
        },
        scales: {
            x: {
                stacked: true,
                title: {
                    text: "Tháng",
                    display: true,
                },
            },
            y: {
                stacked: true,
                title: {
                    text: "VND",
                    display: true,
                },
            },
        },
    };

    return (
        <div id='CostStatistics'>
            <Line data={data} options={options} config></Line>
            <div className='input-range-container'>
                <label htmlFor='start'>Từ:</label>
                <input
                    id='start'
                    type='date'
                    onChange={(e) => setStartDate(convertDate(e.target.value))}
                />
                <label htmlFor='end'>Đến:</label>
                <input
                    id='end'
                    type='date'
                    onChange={(e) => setEndDate(convertDate(e.target.value))}
                />
                <button
                    style={{ cursor: "pointer" }}
                    onClick={() => getStatisticWithDate(startDate, endDate)}>
                    Thống kê
                </button>
            </div>
        </div>
    );
};

export default CostStatistics;
