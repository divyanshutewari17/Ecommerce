export const addItem = (item) =>({
    type: "ADD",
    item
})

export const removeItem = (item) =>({
    type: "REMOVE",
    item
})

export const removeSingleItem = (item) =>({
    type: "REMOVE_ONE",
    item
})