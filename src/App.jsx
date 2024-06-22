import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from './store/movies';
import {fetchUser, setType} from './store/users';

const App = () => {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state)=>state.users);
  const dispatch = useDispatch(); 

  return(
    <>
      <h2>Movie:</h2>
      <ul>
        {movies ? movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        )): null}
      </ul>
      <hr />
      <button onClick={()=>dispatch(addMovie({id:3, title:'Batman'}))}>Add movie</button>
      <hr />
      {/* <h3>User type:{users.type}</h3>
      <button onClick={()=> dispatch(setType('Admin'))}>
        Set type
      </button> */}
      <button onClick={() => dispatch(fetchUser({id:'1'}))}>
        Get users
      </button>
      <div>{users.loading ? 'loading...': null}</div>
      <ul>
        {users ? 
          users.users.map(user=> (
            <li key={user.id}>{user.name}</li>
          ))
          : null
        }
      </ul>
    </>
  )
}

export default App