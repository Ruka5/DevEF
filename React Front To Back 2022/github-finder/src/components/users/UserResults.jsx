import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import GithubContext from '../../context/github/GithubContext'

// this gonna be about routes, so don't gonna put to App.js
// its gonna go to every page, Home, About, ...

function UserResults() {
  const { users, loading } = useContext(GithubContext)

  // useEffect(() => {
  //   fetchUsers() // is good only for testing purposes!!!
  // }, []) // [] array of dependencies, is empty, because we have no dependencies yet

  if (!loading) {
    return (
      // create a list of users to map through
      <div
        className="grid grid-cols-1 gap-8 xl:grid-cols-4
            lg:grid-cols-3 md:grid-cols-2"
      >
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
          // <h3 key={idx}>{user.login}</h3>
        ))}
      </div>
    )
  } else {
    return (
      <h3>
        <Spinner />
      </h3>
    )
  }
}

export default UserResults
