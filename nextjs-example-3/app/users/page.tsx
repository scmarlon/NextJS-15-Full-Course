
export const Users = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

  return (
    <div className="mt-7">
        {""}
        <h1>User List</h1>
        <ul>
            {data.map((user: { id: number; name: string }) => (
                <li key={user.id}>
                    <h3>User Name: {user.name}</h3>
                </li>
            )   
            )}
        </ul>{""}
    </div>
  )
}

export default Users