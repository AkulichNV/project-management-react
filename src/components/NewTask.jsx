import { useState, useRef } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
    const modal = useRef();
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            return modal.current.open();
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okey">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">
                    Oops ... looks like you forgot to enter a value.
                </p>
                <p className="text-stone-600 mb-4">
                    Please make sure you provide a valid value in input field.
                </p>
            </Modal>
            <div className="flex items-center gap-4">
                <input 
                    type="text" 
                    className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
                    onChange={handleChange}
                    value={enteredTask}
                />
                <button 
                    className="text-stone-700 hover:text-stone-950" 
                    onClick={handleClick}
                >Add Task</button>
            </div>
        </>
    )
}