import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [openFolder, setOpenFolder] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleFolder = (e, isFolder) => {
    e.stopPropagation(); 
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const handleToggleFolder = () => {
    setOpenFolder(!openFolder);
  };

  return (
    <>
      {explorer.isFolder ? (
        <div
          onClick={handleToggleFolder}
          className="text-xl justify-between flex items-center font-semibold bg-slate-500 p-3 m-1 rounded w-[400px] cursor-pointer"
        >
          <span>📁 {explorer.name}</span>
          <div className="flex gap-2">
            <span
              onClick={(e) => handleFolder(e, true)}
              className="border-[2px] p-1 rounded border-black cursor-pointer"
            >
              Folder +
            </span>
            <span
              onClick={(e) => handleFolder(e, false)}
              className="border-[2px] p-1 rounded border-black cursor-pointer"
            >
              File +
            </span>
          </div>
        </div>
      ) : (
        <div className="text-xl font-semibold p-3 m-1 rounded cursor-pointer">
          📝 {explorer.name}
        </div>
      )}

      {explorer.isFolder && (
        <div className={`${openFolder ? "block" : "hidden"} mx-7`}>
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📝"}</span>
              <input
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                type="text"
                className="w-[300px] bg-slate-400 p-3"
              />
            </div>
          )}
          {explorer.items &&
            explorer.items.map((fol) => <Folder key={fol.id} explorer={fol} />)}
        </div>
      )}
    </>
  );
};

export default Folder;
