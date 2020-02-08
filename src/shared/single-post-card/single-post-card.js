import React from 'react'
import { Card } from './single-post-card-styles'


export const SinglePostCard = ({ post }) => {

    return (
        <Card className="card">
            <div className="card-content">
                <h4 className="title"> {post.title} </h4>
                <div>
                  <p>{post.body}</p>
                </div>
            </div>
        </Card>
    )
}