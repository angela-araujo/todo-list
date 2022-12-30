import './NewTask.css';
import { PlusCircle } from 'phosphor-react';

export function NewTask() {
    return (
        <div className="new-task">
            <input
                className="task"
                type="text"
                id="task"
                placeholder="Adicione uma nova tarefa"
            />
            <button>
                Criar&nbsp;
                <PlusCircle size={24} />
            </button>
        </div>

    )
}