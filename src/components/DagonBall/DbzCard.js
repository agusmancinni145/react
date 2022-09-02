const DbzCard = ( { name, specie, image } ) => {
return (

    <div>
        <h1>{name}</h1>
        <h2>{specie}</h2>
        <img src={image}/>
    </div>
)
}

export default DbzCard