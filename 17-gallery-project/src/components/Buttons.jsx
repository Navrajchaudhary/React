import React from 'react'

const Buttons = ({index, setUserData, setIndex}) => {
  return (
    <div className="flex justify-center items-center gap-5 p-5">
        <button
          className="bg-amber-400 text-black py-2 px-5 rounded cursor-pointer text-sm font-medium active:scale-95"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          style={{ opacity: index == 1 ? 0.5 : 1 }}
        >
          Prev
        </button>
        <div className="bg-gray-700 py-2 px-5 rounded text-sm">
          Page {index}
        </div>
        <button
          className="bg-amber-400 text-black py-2 px-5 rounded cursor-pointer text-sm font-medium active:scale-95"
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
  )
}

export default Buttons
