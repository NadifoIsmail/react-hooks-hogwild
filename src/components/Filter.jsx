import React from 'react'

export default function Filter({showGreased,toggleGreased}) {
  return (
      <div>
        <button onClick = {toggleGreased}>
          {
            showGreased ? "Show all Hogs" : "Show only greased Hogs"
          }
        </button>
      </div>
  )};
