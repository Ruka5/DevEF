import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
      {/* <h1 className="text-6xl">Welcome</h1> */}
      {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
    </>
  )
}

export default Home
