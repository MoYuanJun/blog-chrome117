import React, { useState, useCallback, useEffect } from 'react';

export default () => {
  const [list, setLit] = useState([])

  const getData = useCallback(async () => {
    fetch('http://127.0.0.1:3000/v3/todo-detail')
    fetch('http://127.0.0.1:3000/v2/todo-list')
    fetch('http://127.0.0.1:3000/v2/todo')
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div>
      {list.map(v => (
        <div key={v.id}>
          {v.title}
        </div>
      ))}
    </div>
  )
}