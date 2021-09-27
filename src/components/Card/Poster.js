import './Poster.css'


function Poster({title,rating,author,description,id}) {
    
    return (
        <div className = "Card">
            <h1>{title}</h1>
            <h3>{rating}</h3>
            <h2>{author}</h2>
            <p>{description}</p>
        </div>
    )
}
export {Poster}