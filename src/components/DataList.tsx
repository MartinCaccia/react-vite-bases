import { useState } from "react"
import { User } from "../interfaces/Users.interface"
import { Post } from "../interfaces/Posts.interface"
import { useFetchData } from "./hooks/useFetchData"

export const DataList = ({handleTitle}: any) => {
    const [endpoint, setEndpoint] = useState('users')
    const { data, error, isLoading } = useFetchData(endpoint)

    let users: User[] = [], posts: Post[] = []
    if (data.users && isLoading === false) users = data.users
    if (data.posts && isLoading === false) posts = data.posts

    const showUserPosts = (id: number) => {
        handleTitle(`Posts List from userId ${id}`)
        setEndpoint(`posts/user/${id}`)
    }
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

  return (
    <>
        <ol>
            {
                data.users ?                
                users.map(user =>
                        <li key={user.id}>
                            <p>{`Name: ${ user.firstName }`}</p>
                            <p>{`Email: ${ user.lastName }`}</p>                            
                            <button onClick={()=>showUserPosts(user.id)}>Show posts</button>
                        </li>
                )
                :
                posts.map(post =>
                    <li key={post.id}>
                        <p>{`Title: ${ post.title }`}</p>
                        <p>{`Body: ${ post.body }`}</p>
                    </li>
                )                
            }
        </ol>
    </>
  )
}
