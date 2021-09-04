import React from 'react'
import {Typography, Card, CardActionArea, Link, CardMedia, CardContent, CardActions, Button, makeStyles} from '@material-ui/core'

const CardBlog = ({ blog }) => {
    const useStyles = makeStyles({
        root: {
          maxWidth: 360,
        },
        media: {
          height: 140,
        },
      });      

    const classes = useStyles()
    const {description, url, image, title} = blog
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" href={url} target='_blank'>
              Read More
            </Button>
          {/* <Button size="small" color="primary">
            Learn More
          </Button> */}
        </CardActions>
      </Card>
    )
}

export default CardBlog