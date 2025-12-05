
"use client";

import { useState } from "react";

async function makePostRequest() {
  //`${process.env.NEXT_URL}/api/hello` ==> server component
  const res = await fetch("/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Marlon Sanchez" }),
  });

  const data = await res.json();
  return {data};
}

const Friends = () => {
  const [message, setMessage] = useState("")
  const onClick = async () =>{
    const {data} = await makePostRequest();
    setMessage(data.message)

  }
    
  return (
    <h1>Heyyy Yooo, {message}<button onClick={onClick}>Click here</button></h1>
  );
};

export default Friends;
