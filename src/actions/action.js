export const searchData = (data) => {
    return {
        type: 'SEARCH_DATA',
        payload: data
    }
}

export const search = () => {
    return {
        type: 'SEARCH'
    }
}