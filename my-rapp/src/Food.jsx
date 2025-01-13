function food() {
    const food1 = "Pizza";
    const food2 = "Burger";
    const food3 = "Sandwich";

    return (
        <ul>
            <li>
                Apple
            </li>
            <li>
                {food1}
            </li>
            <li>
                {food2.toUpperCase()}
            </li>
        </ul>
    );
}

export default food;