import React from 'react'
import { Poster } from './Poster'
import './Poster.css'
function BookCard() {
const [data,setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [page, setPage] = React.useState(1);
    const [search, setSearch] = React.useState('');
 
    function callingFun() {
          fetch(`http://localhost:3001/bookInfo?_page=${page}&_limit=3`)
            .then((data) => data.json())
            .then((data) => {
              console.log(data);
              setData(data);
              setLoading(false);
            });
    }
    React.useEffect(() => {
        callingFun();
    }, [page])
    console.log(data);
    return loading ? (
      "Loading...."
    ) : (
      <div className="Parent">
        <div>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="search"
          />
        </div>
        <div>
          <button>Search</button>
        </div>
        {data.filter((val) => {})}
        {data.map((items) => {
          return <Poster key={items.id} {...items} />;
        })}
        <div className='btn'>
          <button
            onClick={() => {
              setPage(page - 1);
            }}
          >
            PrevPage
          </button>
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            NextPage
          </button>
        </div>
      </div>
    );
}
export {BookCard}