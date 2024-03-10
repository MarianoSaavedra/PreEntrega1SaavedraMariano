const ItemListContainer = (props) =>{
    return (
        <div className="itemListContainer">
            <h1>Titulo principal</h1>
            <div>
                <p>{props.greeting}</p>
            </div>
        </div>
    )
}

export default ItemListContainer;