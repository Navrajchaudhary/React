import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [tittle, setTittle] = useState("");
  const [notes, setnotes] = useState("");

  const [task, settask] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ tittle, notes });
    settask(copyTask);
    setTittle("");
    setnotes("");
  };

  const deleteNotes = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    settask(copyTask);
  };

  return (
    <div className="h-full bg-black text-white p-5 lg:flex gap-4">
      <form
        onSubmit={(e) => {
          handelSubmit(e);
        }}
        className="flex items-start flex-col gap-3 lg:w-1/2"
      >
        <h1 className="text-2xl font-bold text-white">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading..."
          className="border-2 border-gray-500 px-5 py-3 rounded text-2xl font-medium w-full "
          value={tittle}
          onChange={(e) => {
            setTittle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter Details..."
          rows={5}
          className="border-2 border-gray-500 px-5 py-3 rounded text-2xl font-medium w-full"
          value={notes}
          onChange={(e) => {
            setnotes(e.target.value);
          }}
        ></textarea>

        <button className="border-2 bg-white text-black rounded text-2xl font-medium px-5 py-3 w-full active:scale-95">
          Add Note
        </button>
      </form>
      <div className="lg:px-5 lg:w-full lg:border-l-2 ">
        <h1 className="text-2xl font-bold text-white">Your Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-screen overflow-auto hide-scrollbar">
          {task.map((elm, idx) => {
            return (
              <div
                key={idx}
                className="bg-white text-black rounded w-70 min-h-30 p-4 relative"
              >
                <h2
                  onClick={() => {
                    deleteNotes(idx);
                  }}
                  className="absolute right-2 top-2 bg-red-500 p-1 text-white rounded cursor-pointer"
                >
                  <X size={16} strokeWidth={3.25} />
                </h2>
                <h3 className="font-bold text-[20px] leading-tight">
                  {elm.tittle}
                </h3>
                <p className="text-gray-600 leading-tight my-5 ">{elm.notes}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
