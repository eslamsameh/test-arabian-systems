import React from 'react'
import { Card } from './single-post-card-styles'


export const SinglePostCard = ({ post }) => {

    return (
        <Card className="card">
            <div className="card-content">
                <h6 className="title"> {post.title.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')} </h6>
                <div>
                <p>{post.body.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}</p>
                </div>
            </div>
        </Card>
    )
}