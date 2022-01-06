const SET_SORT_BY = "SET_SORT_BY"
const SET_CATEGORY = "SET_CATEGORY"

export const setSortByAC = (name) => ({
    type: "SET_SORT_BY",
    payload: name
})
export const setCategoryAC = (catIndex) => ({
    type: "SET_CATEGORY",
    payload: catIndex
})

