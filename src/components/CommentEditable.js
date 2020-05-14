import React, { useState } from 'react'
import NewComment from './NewComment'
import Comment from './Comment'
function CommentEditable({ comment }) {

    const [isEdit, changeIsEdit] = useState(false)
    return (
        isEdit ? <NewComment comment={comment} edit={changeIsEdit} /> : <Comment comment={comment} edit={changeIsEdit} />
    )
}

export default CommentEditable