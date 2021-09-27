import React from 'react'
import {Poster} from './Poster'
function BookCard() {
const [data,setData] = React.useState([])
const[loading,setLoading] =React.useState(false)

    React.useEffect(() => {
        fetch("http://localhost:3001/bookInfo")
          .then((data) => data.json())
          .then((data) => {
              console.log(data);
              setData(data);
              setLoading(false);
          });
    }, [])
    console.log(data);
    return loading ? (
        "Loading...."
    ) : (
      <div>
            {data.map((items) => {
                return (
                    <Poster key={items.id} {...items}/>
                )
            })}
      </div>
    );
}
export {BookCard}