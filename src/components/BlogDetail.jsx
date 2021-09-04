import { Grid } from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectBlogs, setBlogData } from '../features/userSlice';
import Loader from './Loader';

const BlogDetail = () => {
    const { blogTitle } = useParams()
    let detail = useSelector(selectBlogs)
    console.log(detail)
    const {title, content, publishedAt, source} = detail
    const dispatch = useDispatch()
    const fetchBlogDetail = (title) => {
        axios
        .get(`https://gnews.io/api/v4/${title}`)
        .then(res => {
            dispatch(setBlogData(res.data))
            // setBlogs(res.data)
            // setLoading(false)
            console.log(setBlogData)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        if (blogTitle && blogTitle !== '') fetchBlogDetail(blogTitle)
    }, [blogTitle])
    return (
        <Grid item xs={12} md={8}>
            {Object.keys(detail).length === 0 ? 
                <Loader />
                : <div>hello, {title}</div>}
        </Grid>
    )
}

export default BlogDetail
