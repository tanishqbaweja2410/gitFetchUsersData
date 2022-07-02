import React from 'react'

const Tabs = ({ type, setType }) => {
  return (
    <>
      <button onClick={()=>setType("repos")} className={`${type === 'repos' && "text-sky-400"}`}>Repositories</button>
      <button onClick={()=>setType("received_events")} className={`${type === 'received_events' && "text-sky-400"}`}>Activity</button>
      <button onClick={()=>setType("followers")} className={`${type === 'followers' && "text-sky-400"}`}>Followers</button>
    </>
  )
}

export default Tabs;
