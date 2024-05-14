export default sum = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Both values must be a number");
    }

    return a + b;
};

export const user = "John";
