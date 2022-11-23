import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";

const Form = ({tasks = []}) => {
    const {register, handleSubmit, formState: { isValid, errors }} = useForm({
        mode: 'onChange',
    });

    const styles = {
        container: {
          width: "80%",
          margin: "0 auto",
        },
        input: {
          width: "100%",
        },
      };
    const {push} = useRouter();

        const onSubmit = async (data) => {
            try {
                console.log(data);
                await fetch('http://localhost:3000/api/task', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data.name)
                })
                .then((response) => response.json())
                .then((data) => console.log(data));
                tasks.push(data)
                await push("/");
            } catch (error) {
                console.log(error);
            }
        };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name' , {required: true})} type="text" placeholder="Enter a task" />
            {errors.name && <span>Please enter a task</span>}
            <Button variant="primary" size="sm" type="submit" disabled={!isValid}>Create Task</Button>
        </form>
    );
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

export default Form;