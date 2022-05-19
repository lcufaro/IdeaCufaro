import ItemCount from "./ItemCount";

function ItemListContainer({ greeting }) {
    return (
        <>
            <p style={{ fontSize: 18 }}>
                {greeting}
            </p>
            <p><ItemCount stock="5" initial="1" /></p>
        </>
    );
}

export default ItemListContainer;