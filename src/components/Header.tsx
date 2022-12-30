import './Header.css';
import logoList from '../assets/logo-list.svg';
import { NewTask } from './NewTask';


export function Header() {
    return (
        <header className="header">
            <div className="image-logo">
                <img src={logoList} alt="Logo To Do List" />
            </div>
            <NewTask />
        </header>
    )
}