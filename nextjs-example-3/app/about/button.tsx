'use client';   
const ButtonComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <button onClick={()=> alert("hello dude!!!")} className="cursor-pointer bg-blue-500 text-white p-2 rounded mt-7 ">Click me!!</button>
      </div>
  )
}

export default ButtonComponent