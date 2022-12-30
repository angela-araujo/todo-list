import { Trash, Circle, CheckCircle } from 'phosphor-react';
import './Task.css'

export interface TaskProps {
    id: string;
    title: string;
    done: boolean;
}

export function Task(props: TaskProps) {
    return (
        <div className="task">
            <label >
                {/* <Circle />
                <CheckCircle className='circle-checked' /> */}
                <input type="checkbox" name={props.id} id={props.id} checked={props.done} />
                {props.title}
            </label>

            <Trash />
        </div >
    )
}