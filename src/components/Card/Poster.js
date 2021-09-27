import './Poster.css'


function Poster({title,rating,author,description,id,image}) {
 
    return (
        <div className="Card">
            <img src={image} alt="book" />
            <h1>{title}</h1>
            <h3>{rating}</h3>
            <h2>{author}</h2>
            <p>{description}</p>
        </div>
    )
}
export {Poster}