import { useState } from "react";

const Cat = () => {
    const [cat, setCat] = useState({ name: "Dexter", year: 5 });

    const handleClick = () => {
        // setCat({ ...cat, year: cat.year + 1 });
        setCat((prev) => ({ ...prev, year: cat.year + 1 }));
    };

    return (
        <>
            <h2>
                {cat.name} - {cat.year}
            </h2>
            <button onClick={handleClick} className="btn btn-dark mb-2">
                Update year
            </button>
        </>
    );
};
export default Cat;
