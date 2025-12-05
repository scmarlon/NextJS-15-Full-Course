
const Contact = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await response.json()
  return (
    <div>
      <h1 className="text-3xl text-black bg-amber-200">Contact Page</h1>
      <p className="text-xl mt-3.5">This is the tittle ofe the data: {data.title}</p>
    </div>

  )
}

export default Contact