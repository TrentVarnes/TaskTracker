import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { useRouter } from "next/router";

export default function Todo({tasks = []}) {

    const {push, query} = useRouter();

    const handleChange = async ({id}) => {
        try {
            await fetch(`http://localhost:3000/api/${id}`, {
                method: "PUT",
            });
            await push("/")
        } catch (error) {
            console.log(error);
        }
    };


     const handleDelete = async ({id}) => {
        try {
            await fetch(`http://localhost:3000/api/${id}`, {
                method: "DELETE",
            })
            await push("/")
        } catch (error) {
            console.log(error);
        }
    };

    return(
          <div>
          {tasks && tasks.length > 0 ? tasks.map((task) => (
              <ListGroupItem key={task.id}>
                  <input type="text" value={task.name} onChange={(event) => event.preventDefault()}/>
                    <Button variant="warning" size="sm" active onClick={() => handleChange(task)}>Mark Complete</Button>{' '}
                    <Button variant="danger" size="sm"  active onClick={() => handleDelete(task)}>Delete task</Button>
              </ListGroupItem>
          )): "no data available"}
          </div>
    )
  
  };
  
    export async function getServerSideProps() {
      const response = await fetch("http://localhost:3000/api/task");
      const tasks = await response.json();
    
      return {
        props: {
          tasks,
        }
      }
  };
