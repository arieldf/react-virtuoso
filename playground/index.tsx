import React from 'react'
import * as ReactDOM from 'react-dom'
import { GroupedVirtuoso } from '../src/'

const App = () => {
  const groupCounts = []
  for (let index = 0; index < 1000; index++) {
    groupCounts.push(1)
  }

  return (
    <div>
      <GroupedVirtuoso
        style={{ height: '400px', width: '350px' }}
        groupCounts={groupCounts}
        group={index => {
          return (
            <div style={{ height: 100, backgroundColor: 'rgba(0,0,0,0.1)' }}>
              Group {index * 10} &ndash; {index * 10 + 10}
            </div>
          )
        }}
        item={(index, groupIndex) => {
          return (
            <div style={{ height: 200, backgroundColor: 'rgba(0,0,200,0.1)' }}>
              {index} (group {groupIndex})
            </div>
          )
        }}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
