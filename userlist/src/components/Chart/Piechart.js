import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { PieChart, Pie, Tooltip } from "recharts";
import axios from 'axios'
import './Chart.css'

const Chart = () => {
    const [data, setData] = useState([]);
    let source = axios.CancelToken.source();
    useEffect(() => {
        const apiUrl = 'http://localhost:3006/data';
        setTimeout(() => {
            axios.get(apiUrl, {
                cancelToken: source.token
            }).then((repos) => {
                const allRepos = repos.data;
                setData(allRepos)
            })
        }, 3000)
    }, [])
    console.log(data)
    return (
        <div className="container">
            <h1>Pie Chart</h1>
            <Link
                to="/"
                type="button"
                className="btn btn-primary"
                onClick={() => source.cancel()}
            >Go to Home Page</Link>
            <div className="row">

                <PieChart className="pie shadow mt-2" width={1000} height={400}>

                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx={450}
                        cy={200}
                        outerRadius={140}
                        fill="#8884d8"
                        label
                    />

                    <Tooltip />
                </PieChart>
            </div>

        </div>
    )
}

export default Chart;