import { Comment } from 'postcss'
import React from 'react'

const CommentsList = ({comments}) => {
  return  
        comments.map((comment,index)=>(
             <Comment key={index} data={comment}/>
        ))}
    
  


export default CommentsList