import React, { useState , useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import './UserDashboard.scss';
import 'react-calendar/dist/Calendar.css';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function UserDashboard() {
  const [yogaData, setYogaData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editingSession, setEditingSession] = useState(null);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [goal, setGoal] = useState(15);
  const [data, setData] = useState({
    labels: yogaData.map(session => session.date.toLocaleDateString()),
    datasets: [
      {
        label: `Goal (${goal} minutes)`,
        data: new Array(yogaData.length).fill(goal),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Logged Time',
        data: yogaData.map(session => session.duration),
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  });

const addYogaSession = (event) => {
    event.preventDefault();
    // Parse sessionDuration as a number before using it
    const duration = sessionDuration ? parseInt(sessionDuration, 10) : 0;
    const newSession = { date: selectedDate, duration };
    setYogaData([...yogaData, newSession]);
    setSessionDuration('');
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
    const existingSession = yogaData.find(session => session.date.toDateString() === date.toDateString());
    if (existingSession) {
      setEditingSession(existingSession);
      setSessionDuration(existingSession.duration.toString());
    } else {
      setEditingSession(null);
      setSessionDuration('');
    }
  };

  const updateSession = () => {
    const updatedData = yogaData.map(session => {
      if (session.date.toDateString() === selectedDate.toDateString()) {
        return { ...session, duration: sessionDuration };
      }
      return session;
    });
    setYogaData(updatedData);
  };


useEffect(() => {
    try {
        const storedData = localStorage.getItem('storedData');
        const storedGoal = localStorage.getItem('storedGoal');
        const storedYogaData = localStorage.getItem('storedYogaData');

        if (storedData) {
            setData(JSON.parse(storedData));
        }
        if (storedGoal) {
            setGoal(JSON.parse(storedGoal));
        }
        if (storedYogaData) {
            const parsedYogaData = JSON.parse(storedYogaData).map(session => {
                return { ...session, date: new Date(session.date) };
            });
            setYogaData(parsedYogaData);
        }
    } catch (error) {
        console.error("Error loading data from localStorage", error);
    }
}, []);

useEffect(() => {
 const sortedYogaData = [...yogaData].sort((a, b) => a.date - b.date);

    setData({ ...data,  labels: sortedYogaData.map(session => session.date.toLocaleDateString()),
        datasets: [
          {
            label: `Goal (${goal} minutes)`,
            data: new Array(sortedYogaData.length).fill(goal),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'Logged Time',
            data: sortedYogaData.map(session => session.duration),
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          }
        ] });

}, [goal, yogaData]);

useEffect(() => {
    console.log("useEffect yogaData", yogaData);
    console.log("useEffect goal", goal);
    console.log("useEffect data", data);

    // Save to localStorage when 'data', 'goal', or 'yogaData' updates
   if (yogaData.length > 0) {
        localStorage.setItem('storedYogaData', JSON.stringify(yogaData));
        localStorage.setItem('storedGoal', JSON.stringify(goal));
        localStorage.setItem('storedData', JSON.stringify(data));
 
   }
}, [data, goal, yogaData]);

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard">
        <h1 className="dashboard__title">Activity Dashboard</h1>
        <div className="calendar">
          <div>
            <Calendar onChange={onDateChange} value={selectedDate} />
          </div>
          <div className="dashboard__input" >

          <div>
              <label>
                <p className="dashboard__input-name">
                  Set Goal: 
                  </p>
                <input className="dashboard__input-placeholder"
                  type="number" 
                  value={goal} 
                  onChange={(e) => setGoal(Number(e.target.value))} 
                  placeholder="Goal in minutes" 
                />
              </label>
            </div>




            <form onSubmit={addYogaSession}>
                <button className="dashboard__input-button" type="submit">  {editingSession ? 'Update' : 'Log Session'} 
                </button>
              <input 
                type="number" 
                value={sessionDuration} 
                onChange={(e) => setSessionDuration(Number(e.target.value))} 
                className="dashboard__input-placeholder" placeholder="Enter time in minutes" 
              />
            </form>
            {editingSession && <button onClick={updateSession}>Save Changes</button>}
          </div>
        </div>
        <div className="chart-container">

        <Line className="chart" data={data} />
        <Link className="button-wrapper" to='/'>
          <div className="button-wrapper">
            <button className="back-button1 chart__button"> Back</button>
          </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
