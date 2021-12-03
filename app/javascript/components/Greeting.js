import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { fetchGreeting } from '../redux/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const fetchGreetingAction = bindActionCreators(fetchGreeting, dispatch);
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    fetchGreetingAction();
  }, []);
  return (
    <>
      <Card>
        <Card.Header>Greetings</Card.Header>
        <Card.Body>
          <Card.Title>Random Greeting</Card.Title>
          <Card.Text>
            {greeting.data}
          </Card.Text>
          <Button variant="primary" onClick={() => fetchGreetingAction()}>Greet</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Greeting;
