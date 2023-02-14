import React, {useState, useEffect, useRef} from 'react';

const style = {
  main: `flex flex-col p-[10px] relative`
}

const Chat = () => {
  const scroll = useRef()

  return (
    <>
      <main className={style.main}>

      </main>
      <span ref={scroll}></span>
    </>

  )
}

export default Chat



