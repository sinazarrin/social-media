import { createSlice } from "@reduxjs/toolkit";

interface PostsState {
    posts: Post[];
}

interface Post {
    id: number;
}

const initialState: PostsState = {
    posts: []
}

const posts = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload.posts
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post.id === action.payload.post_id) return action.payload.post
                return post
            })
            state.posts = updatedPosts
        }
    }
})

export const { setPosts, setPost } = posts.actions