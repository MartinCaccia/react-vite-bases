import { useFetchData } from './hooks/useFetchData'
import '../styles/ListComponent.css'

export const TableComponent = () => {
    const { data, error, isLoading } = useFetchData('users')
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  return (
    <>
        <h2>Users List</h2>
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">firstName</th>
                    <th scope="col">lastName</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.users.map((user) =>
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td colSpan={2}>{user.email}</td>
                        </tr>
                    )
                }                
            </tbody>
        </table>
    </>
  )
}
