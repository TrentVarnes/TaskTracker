import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import Form from '../components/Form';
import Todo from '../components/Todo';

export default function Home({tasks = []}) {
  return(
      <Container fluid="sm">  
        <Form tasks={tasks}/>
        <Todo tasks={tasks}/>
      </Container> 
  )

};

  export async function getServerSideProps() {
    const response = await fetch("http://localhost:3000/api/task");
    const tasks = await response.json();
  
    return {
      props: {
        tasks
      }
    }
};
