
let idCount = 1;

function createUser(userData) {
    const {name, age, ...otherInfo} = userData;
    if ( name === null || typeof name !== "string") {
        throw new Error("Name is required")
    }
    const normalizedName = name.trim();
    if (normalizedName === ""){
        throw new Error("Name is required")
    }
    if (age === "" || age === null){
        throw new Error("Age is required")
    }
    if (typeof age != "number" || age < 0 || age > 120 || !Number.isInteger(age)) {
        throw new Error("Invalid age")
    }

    const newObject = {
        name: normalizedName,
        age,
        id: idCount,
        ...otherInfo
    }
    idCount += 1;
    return newObject;

}