export const ADD_BLOG = 'ADD_BLOG'
export const DELETE_BLOG = 'DELETE_BLOG'

let blogID = 0

/* Actions */
export function addBlogPost(blog) {
    return {
        type: ADD_BLOG,
        id: blogID ++,
        blog
    }
}

export function deleteBlogPost(id) {
    return {
        type: DELETE_BLOG,
        payload: id        
    }
}

/* Reducers */
const initialState = []

function blogReducer(state = initialState, action) {
    switch (action.type){
        case ADD_BLOG:
            return [
                ...state,
                {
                    id: action.id,
                    blog: action.blog            
                }]

        case DELETE_BLOG:
            const deleteNewArray = remove(state, obj => {
                return obj.id != action.payload
            })

            return deleteNewArray
            
        default:
            return state
    }
}

export default blogReducer