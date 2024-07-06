export function UserFavoriteFoods(props) {
    const foodArray = props.favoriteFoods;
    const foodList = foodArray.map(food => 
        <li key={food.id}>{food.name}</li>
    );

    
    return (
        <section>
            <span>Fav foods:</span>
            <ul>
                {foodList}
            </ul>
        </section>
    );
}