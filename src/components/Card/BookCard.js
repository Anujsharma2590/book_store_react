import React from 'react'
import {Poster} from './Poster'
function BookCard() {
const [data,setData] = React.useState([])

    React.useEffect(() => {
        fetch("http://localhost:3001/bookInfo")
          .then((data) => data.json())
          .then((data) => {
              console.log(data);
              setData(data);
          });
    }, [])
    console.log(data);
    return (
      <div>
        <div>hello</div>
        <div>
          <Poster />
        </div>
        <div>
          <Poster />
        </div>
      </div>
    );
}
export {BookCard}