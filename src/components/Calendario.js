import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import events from '../json/events.json'

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #f0f0f0;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h2`
  font-family: 'Arial', sans-serif;
  color: #333;
  margin-bottom: 20px;
  font-size: 2rem;
`;

const StyledCalendar = styled(Calendar)`
  border: none;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  font-size: 1.5rem;

  .react-calendar__tile {
    background-color: #fff;
    color: #333;
    font-weight: bold;
    height: 120px;
    position: relative;
  }

  .react-calendar__tile--active {
    background-color: #611131;
    color: white;
  }

  .react-calendar__tile--event {
    background-color: #d1b183;
    color: #333;
    &::after {
      content: '';
      width: 10px;
      height: 10px;
      background-color: #611131;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }

  .react-calendar__navigation button {
    color: #611131;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #611131;
  }
`;

const EventModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 500px;
  width: 100%;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const CloseButton = styled.button`
  background-color: #611131;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  float: right;
`;

const EventItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const Calendario = () => {
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const formattedDate = value.toISOString().split('T')[0];
  const dayEvents = events[formattedDate] || [];

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      return events[dateString] ? 'react-calendar__tile--event' : null;
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const closeModal = () => {
    setSelectedDate(null);
  };

  return (
    <CalendarContainer>
      <Title>Calendario</Title>
      <StyledCalendar
        value={value}
        onChange={onChange}
        tileClassName={tileClassName}
        onClickDay={handleDateClick}
      />
      {selectedDate && (
        <>
          <ModalOverlay onClick={closeModal} />
          <EventModal>
            <CloseButton onClick={closeModal}>Cerrar</CloseButton>
            <h3>Eventos para {selectedDate.toISOString().split('T')[0]}</h3>
            {events[selectedDate.toISOString().split('T')[0]]?.length > 0 ? (
              events[selectedDate.toISOString().split('T')[0]].map(
                (event, index) => <EventItem key={index}>{event}</EventItem>
              )
            ) : (
              <EventItem>No hay eventos para esta fecha.</EventItem>
            )}
          </EventModal>
        </>
      )}
    </CalendarContainer>
  );
};

export default Calendario;
