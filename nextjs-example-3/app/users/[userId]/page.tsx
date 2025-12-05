import { notFound } from "next/navigation";

const UserPage = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);


  if (!response.ok) {
    console.log('Failed to fetch user data');
    return null; 
  }

  const user = await response.json();
  return user;
};

export const DataUser = async ({ params }: { params: Promise<{ userId : string}> }) => {
    const {userId} = await params;
    const user = await UserPage(userId);
    
    if(!user){
      notFound();
    }
  return (
    
    <div>
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
    </div>
  )
}

export default DataUser