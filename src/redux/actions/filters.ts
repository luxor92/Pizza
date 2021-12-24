const SET_SORT_BY = "SET_SORT_BY"
const SET_CATEGORY = "SET_CATEGORY"

type setSortByACType = {
    type: typeof SET_SORT_BY,
    payload: string
}
type setCategoryACType = {
    type: typeof SET_CATEGORY,
    payload: number
}

export const setSortByAC = (name: any): setSortByACType => ({
    type: "SET_SORT_BY",
    payload: name
})
export const setCategoryAC = (catIndex: number): setCategoryACType => ({
    type: "SET_CATEGORY",
    payload: catIndex
})

