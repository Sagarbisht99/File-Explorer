import React from 'react'
import Folder from './Component/Folder'
import explorer from "./data/Folder"

function App() {
  return (
    <>
        <Folder explorer={explorer} />
    </>
  )
}

export default App