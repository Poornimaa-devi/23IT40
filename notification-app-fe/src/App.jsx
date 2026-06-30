import { useState,useEffect } from 'react';
import './App.css'
export default function App() {
   const[notifications, setNotifications] = useState([
    {id:1 ,title: 'Tech fest 2k26', message: 'Tech fest 2k26 is coming soon! Get ready!',priority: 'high',time:"10:00 AM"},
    {id:2 ,title: 'Sports Meet', message: 'Sports meet is scheduled for next week!',priority: 'medium',time:"11:00 AM"},
    {id:3 ,title: 'Cultural Fest', message: 'Cultural fest is happening this weekend!',priority: 'low',time:"12:00 PM"},
   ]);
   const[filteredNotifications, setFilteredNotifications] = useState(notifications);
   const[loading,setLoading]=useState(true);
   const[error,setError]=useState(null);

   useEffect(()=>{
    const interval = setInterval(()=>{
      const newnotification = {id:Date.now(), title: 'New Notification', message: 'This is a new notification!', priority: 'medium', time: new Date().toLocaleTimeString()}
      setNotifications(prevNotifications => [newnotification, ...prevNotifications])},5000);

      return() => clearInterval(interval)},[]);


  return (
    <div className="App">
      <h1>Notification App</h1>
      <p>Welcome to the Notification App!</p>
      <select value={filteredNotifications} onChange={(e)=>{
        const selectedPriority = e.target.value;
        setFilteredNotifications(notifications.filter(n => n.priority === selectedPriority));
      }}>
        <option value="all">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}