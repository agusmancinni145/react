import DbzCard from "./DbzCard"


const DbzCardList = ( { chars } )=> {
    return ( 
        <div>
            {chars.map ( c => 
            <DbzCard key={c.id} name={c.name} specie={c.specie} image={c.image}/> 
            )}
        </div>
    )
}
export default DbzCardList