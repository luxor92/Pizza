const setSortByAC = (name: any) => ({
    type: "SET_SORT_BY",
    payload: name
})

const setCategoryAC = (catIndex: any) => ({
    type: "SET_CATEGORY",
    payload: catIndex
})

export default setSortByAC;
