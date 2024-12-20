import { useState } from 'react'
import {puppyList} from`./data.js`

function App() {
 console.log {puppyList}
 const [puppies, setPuppies]= useState(puppyList)
  return (
    <>
      <div>
      puppyList.map((puppy ) => {
        return <p>{puppy.name}</p>
      })
    
      </div>
      {/* <button onClick={setPuppies }}
      </p>
    </>
  )
}

export default App
