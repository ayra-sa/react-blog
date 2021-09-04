import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { selectBlogs, selectSearch, setBlogData } from '../features/userSlice'
import { Grid, Link, Paper, Typography } from '@material-ui/core'
import Loader from './Loader'
import CardBlog from './CardBlog'
import {useStyles} from '../theme'


const BlogList = () => {
    const searchInput = useSelector(selectSearch)
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=74da443369bd202a1f3146a275d761fc`;
    const [blogs, setBlogs] = useState()
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const classes = useStyles()
    
    const fetchBlog = () => {
        axios
        .get(blog_url)
        .then(res => {
            dispatch(setBlogData(res.data))
            setBlogs(res.data)
            setLoading(false)
            console.log(blogs)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchBlog()
    }, [searchInput])

    const b = useSelector(selectBlogs)
    console.log(b)

    // const {description, image, url, title} = blogs?.articles?.[0]

    return (
        <div className={classes.blog}>
            {/* <Typography variant='h3'>Blog</Typography> */}
            {loading ? <Loader /> : ''}
            {blogs?.totalArticles === 0 ? (
                <Typography variant='h4'>
                    No blogs available 😞. Search something else to read blogs on the
                    greatest platform.
                </Typography>
            ) :
            (
            <div>
                <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${ blogs?.articles?.[0].image})` }}>
                    {<img className={classes.img} src={ blogs?.articles?.[0].image} alt='' />}
                <div className={classes.overlay}>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturedPost}>
                                <Typography component='h3' variant='h4'>
                                    { blogs?.articles?.[0].title}
                                </Typography>
                                <Typography variant='h6'>
                                    { blogs?.articles?.[0].description}
                                </Typography>
                                
                                <Link variant='subtitle1' href={ blogs?.articles?.[0].url} target='_blank'>
                                Read More
                                </Link>
                                
                            </div>
                        </Grid>
                    </Grid>
                </div>
                </Paper>
                <div className={classes.flex}>
                    {blogs?.articles?.map((blog, index) => (
                        <CardBlog blog={blog} key={index} />
                    ))}
                </div>
            </div>)
            }
        </div>
    )
}

export default BlogList