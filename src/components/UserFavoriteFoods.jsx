import styles from "./users.module.scss";

export function UserFavoriteFoods(props) {
    const foodArray = props.favoriteFoods;
    const foodList = foodArray.map(food => 
        <li key={food.id}>{food.name}</li>
    );

    return (
        <section>
            <span className={styles.foodsTitle}>Fav foods:</span>
            <ul>
                {foodList}
            </ul>
        </section>
    );
}