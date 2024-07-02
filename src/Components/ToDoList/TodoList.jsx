import React, { useEffect, useState } from 'react';
import { MdDeleteSweep } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import './TodoList.css';
import { CiEdit } from 'react-icons/ci';

const TodoList = () => {
    // shift todo and complete box
    const [isScroll, setIsScroll] = useState(false);
    // For Todo box
    const [allTodos, setAllTodos] = useState([]);
    // For title of todo list
    const [title, setTitle] = useState("");
    // for Description of todo list
    const [description, setDescription] = useState("");
    // for Complete box
    const [completed, setCompleted] = useState([]);
    // Update
    

    const handleClickTodo = () => {
        if (title && description) {
            let TodoItem = {
                titles: title,
                descriptions: description
            };
            let updateTodoArr = [...allTodos, TodoItem];
            setAllTodos(updateTodoArr);
            localStorage.setItem('todolist', JSON.stringify(updateTodoArr));
            setTitle("");
            setDescription("");
        }
    };

    useEffect(() => {
        let saved = JSON.parse(localStorage.getItem('todolist'));
        let savedCompleted = JSON.parse(localStorage.getItem('completedList'));
        if (saved) {
            setAllTodos(saved);
        }
        if (savedCompleted) {
            setCompleted(savedCompleted);
        }
    }, []);

    const handleTodoDelete = (index) => {
        let reduceList = [...allTodos];
        reduceList.splice(index, 1);
        localStorage.setItem('todolist', JSON.stringify(reduceList));
        setAllTodos(reduceList);
    };

    const handleTodoCompletedDelete = (index) => {
        let reduceList = [...completed];
        reduceList.splice(index, 1);
        localStorage.setItem('completedList', JSON.stringify(reduceList));
        setCompleted(reduceList);
    };

    const handleTodoCheck = (index) => {
        let now = new Date();
        let dd = now.getDate();
        let mm = now.getMonth() + 1;
        let yyyy = now.getFullYear();
        let h = now.getHours();
        let m = now.getMinutes();
        let ss = now.getSeconds();
        let completeON = `${dd}-${mm}-${yyyy} at ${h}:${m}:${ss}`;
        
        let filtered = {
            ...allTodos[index],
            completeON: completeON
        };
        let updateCompleteTodos = [...completed, filtered];
        setCompleted(updateCompleteTodos);
        handleTodoDelete(index);
        localStorage.setItem('completedList', JSON.stringify(updateCompleteTodos));
    };

    return (
        <div>
            <h1>Todo App</h1>
            <div className="todo-wrapper">
                <div className="todo-input">
                    <div className="todo-input-item">
                        <label htmlFor="">Title</label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder="What's the task Title" 
                        />
                    </div>

                    <div className="todo-input-item">
                        <label htmlFor="">Description</label>
                        <input 
                            type="text" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            placeholder="What's the task Description" 
                        />
                    </div>

                    <div className="todo-input-item">
                        <button className='primarybtn' onClick={handleClickTodo}>Add</button>
                    </div>
                </div>

                <div className="buttonArea">
                    <button 
                        className={`secondarybtn ${!isScroll && 'active'}`} 
                        onClick={() => setIsScroll(false)}
                    >
                        Todo
                    </button>
                    <button 
                        className={`secondarybtn ${isScroll && 'active'}`} 
                        onClick={() => setIsScroll(true)}
                    >
                        Completed
                    </button>
                </div>
                <div className="todo-list">
                {isScroll === false && allTodos.map((item, index) => (  
                        <div className='todo-list-item' key={index}>
                            <div>
                                <h3>{item.titles}</h3>
                                <p>{item.descriptions}</p>
                            </div>
                            <div className='icons'>
                                <MdDeleteSweep 
                                    className='delete' 
                                    onClick={() => handleTodoDelete(index)} 
                                />
                                <FaCheck 
                                    className='checkicon' 
                                    onClick={() => handleTodoCheck(index)} 
                                />
                                
                            </div>
                        </div>
                    ))}
                    {isScroll === true && completed.map((item, index) => (
                        <div className='todo-list-item' key={index}>
                            <div>
                                <h3><del>{item.titles}</del></h3>
                                <p><del>{item.descriptions}</del></p>
                                <p>{item.completeON}</p>
                            </div>
                            <div className='icons'>
                                <MdDeleteSweep 
                                    className='delete' 
                                    onClick={() => handleTodoCompletedDelete(index)} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
