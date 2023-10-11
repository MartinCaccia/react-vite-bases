import { useState } from "react"
import { User } from "../interfaces/Users.interface"
import { Post } from "../interfaces/Posts.interface"
import { useFetchData } from "./hooks/useFetchData"

export const DataList = ({handleTitle}: any) => {
    const [endpoint, setEndpoint] = useState('users')
    const { data, error, isLoading } = useFetchData(endpoint)

    let users: User[] | any, posts: Post[] | any
    if (data && isLoading === false) users = data['users']
    if (data && isLoading === false) posts = data['posts']

    const showUserPosts = (id: number) => {
        handleTitle(`Posts List from userId ${id}`)
        setEndpoint(`posts/user/${id}`)
    }
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    <>
        <ol>
            {
                data['users'] ?                
                users.map(user =>
                        <li key={user.id}>
                            <div style={{"display": "flex"}}>
                                <div>
                                    <p>{`Name: ${ user.firstName }`}</p>
                                    <p>{`Email: ${ user.lastName }`}</p>   
                                </div> 
                                <div>
                                    <button className="btn btn-primary" onClick={()=>showUserPosts(user.id)} style={{"margin" : "15px", "verticalAlign": "center"}}>
                                        Show posts
                                    </button>
                                </div>                        
                            </div>
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
