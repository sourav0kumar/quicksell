import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './body.css'; // Import your CSS file for styling
import Card from './card.jsx';

const MainBody = () => {
  const sections = ['Backlog', 'to do', 'in progress', 'done', 'cancelled'];

   

  return (
    <div className="main-body">
      {sections.map((section, index) => (
        <Section key={index} title={section} />
      ))}
    </div>
  );
};

const Section = ({ title }) => {
    const [tickets, setTickets] = useState([]);
    var flag=false;

  useEffect(() => {
    const requestTickets = async () => {
        const getTickets = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
        setTickets(getTickets.data.tickets);
    };
    
  flag =true;

    requestTickets();
     
  }, []);
 
  const filteredCards = tickets.filter((card) => card.status === 'Todo');
  console.log(filteredCards);
  

 
  return (
    <div className="main-section">
      <h2>{title}</h2>
    {filteredCards.map((ticket) => (
          <Card
            key={ticket.id}
            id={ticket.id}
            title={ticket.title}
            tag={ticket.tag[0]} // Assuming you want to use the first tag
          />
        ))}
    </div>
  );
};

export default MainBody;
