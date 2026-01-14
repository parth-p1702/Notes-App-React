import { useEffect, useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      setTask(JSON.parse(saved));
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    let copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);
    localStorage.setItem("notes", JSON.stringify(copyTask));
    
    setTitle('');
    setDetail('');
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
    localStorage.setItem("notes", JSON.stringify(copyTask));
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start lg:w-1/2 flex-col gap-4 p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* FIRST INPUT */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        {/* SECOND INPUT */}
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 w-full font-medium h-20 py-2 border-2 rounded outline-none"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />
        <button className="bg-white w-full text-black px-5 py-2 rounded active:scale-95 transition duration-200">
          Add Notes
        </button>
      </form>
      <div className=" lg:w-1/2 sm:border-t-2  lg:border-t-0 lg:border-l-2 flex-wrap p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className=" flex flex-wrap gap-5 mt-5 overflow-auto output">
          {/* <div className="h-52 w-40 bg-white rounded"></div> */}
          {task.map((elem, idx) => {
            return (
              <div
                className="flex items-center flex-col justify-between h-55 w-40 bg-cover text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] px-2 pt-5 pb-2 overflow-hidden"
                key={idx}
              >
                {/* <h2 className="absolute top-5 right-5 bg-red-500 p-1 cursor-pointer text-xs rounded-full"><X size={16} strokeWidth={2.75} color="#fff"/></h2> */}
                <div className="w-full py-1">
                  <h3 className="capitalize font-bold text-center px-4 border-b-1">
                    {elem.title}
                  </h3>
                  <p className="p-2 text-sm text-gray-800">{elem.detail}</p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-3/4 text-white bg-red-500 py-1 text-xs rounded font-bold cursor-pointer active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
