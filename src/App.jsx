import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from './store/movies';
import {fetchUser, setType} from './store/users';
import { useEffect } from 'react';

const App = () => {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state)=>state.users);
  const dispatch = useDispatch(); 

  useEffect(()=>{
    dispatch(fetchUser())
    .unwrap()
    .then(response=> {
      console.log(response);
    })
    .catch(error=> {
      console.log(error);
    })
  }, []);

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
      
      <div>{users.loading ? 'loading...': null}</div>
      <ul>
        {users ? 
          users.users.map(user=> (
            <li key={user.id}>{user.name}</li>
          ))
          : null
        }
      </ul>
      <button onClick={() => dispatch(fetchUser({id:'1'}))}>
        Get users
      </button>
    </>
  )
}

export default App