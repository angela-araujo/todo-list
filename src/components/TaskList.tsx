import { Task, TaskProps } from "./Task";
import './TaskList.css';

export function TaskList() {
    const myList = [
        {
            id: '1',
            title: 'Estudar react',
            done: false
        },
        {
            id: '2',
            title: 'Fazer teste de nivelamento',
            done: false
        },
        {
            id: '3',
            title: 'Completar o curso Azure',
            done: false
        },
    ]

    return (
        <main>
            {
                myList.map(currentTask => {
                    return (
                        <Task
                            id={currentTask.id}
                            title={currentTask.title}
                            done={currentTask.done}

                        />
                    )
                })
            }
        </main>
    )


}