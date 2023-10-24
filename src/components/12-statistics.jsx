import './../styles/12-statistics.css'
import Card from './14-statCard'
import { faPerson } from '@fortawesome/free-solid-svg-icons';
// graphs library
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip } from "recharts";
const data = [
    {
        name: "0",
        uv: 2000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "1",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "2",
        uv: 1000,
        pv: 4800,
        amt: 2290
    }
];
export default function Statistic(){
    return(
        <>
            <section className="statistics">
                <div className="statisticsHead">
                    <p className="overview">overview</p>
                    <ul className="statisticsTabs">
                        <li className="statisticsTab">day</li>
                        <li className="statisticsTab">week</li>
                        <li className="statisticsTab">month</li>
                    </ul>
                </div>
                <Card icon={faPerson} title='total paitents' number={155499} percent='this day' />
                <Card icon={faPerson} title='total paitents' number={155499} percent='this day' />
                <Card icon={faPerson} title='total paitents' number={155499} percent='this day' />
                <Card icon={faPerson} title='total paitents' number={155499} percent='this day' />
                <LineChart
                    className='statisticsCurve'
                    width={700}
                    height={250}
                    data={data}
                    syncId="anyId"
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </section>
        </>
    )
}