import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual }  from 'react-redux'
import { fetchAPI , fetchSecondAPI} from "../../redux/placeholder";

function Dashboard() {
  const stateValue = useSelector((state) => state.data && state.data.restaurants[0].name, shallowEqual);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    dispatch(fetchAPI(count))
    dispatch(fetchSecondAPI(count))
  }, [count, dispatch])

  return (
    <div>
      <p>
        You clicked
        {stateValue && stateValue}
        {' '}
        times
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Dashboard