import React from 'react'
import { Avatar, Card, CardHeader, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Reply from '@material-ui/icons/ReplyOutlined'
const useStyles = makeStyles({
    comment: {
        borderRadius: 16
    }
})

export default function Comment() {
    const styles = useStyles()
    return (
        <div>
            <Card className="paper" className={styles.comment}>
                <CardHeader
                    avatar={
                        <Avatar src={'/img/user.png'} />
                    }
                    title="I Think this is a good idea, however i suggest that we look into more stuff before taking further actions"
                    subheader={<div>Nikan Dalvand - Oct 18 2019</div>}
                    action={
                        <IconButton>
                            <Reply />
                        </IconButton>
                    }
                />
            </Card>
        </div>
    )
}