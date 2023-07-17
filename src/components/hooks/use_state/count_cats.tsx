import { useState } from "react";

export function CountCats() {
    const [cats, setCats] = useState<string[]>([])

    const getCats = () => {
        setCats([...cats, "🐈 "])
    }

    return (
        <>
            <h2>useState</h2>

            <p>{cats}</p>

            <button onClick={getCats}>
                There are {cats.length} cats 🥳
            </button>
        </>
    );
}