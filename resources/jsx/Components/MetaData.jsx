import React from 'react'
import { Divider, makeStyles, Card, CardContent, Chip, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        margin: '8px 0px'
    },
    card: {
        borderRadius: 16
    },
    chip: {
        margin: 2
    },
    divider: {
        margin: 18
    }
})


export default function MetaData() {
    const styles = useStyles()
    return (
        <Card className={styles.card}>
            <CardContent>
                <Typography variant="h5" className={styles.title}>
                    Categories
                </Typography>
                <div>
                    <Chip label="hello" className={styles.chip}/>
                    <Chip label="hello" className={styles.chip}/>
                    <Chip label="hello" className={styles.chip}/>
                    <Chip label="hello" className={styles.chip}/>
                </div>
                <Divider className={styles.divider} />
                <Typography variant="h5" className={styles.title}>
                    Tags
                </Typography>
                <div>
                    <Chip label="hello" className={styles.chip}/>
                    <Chip label="hello" className={styles.chip}/>
                    <Chip label="hello" className={styles.chip}/>
                    <Chip label="hello" className={styles.chip}/>
                </div>
            </CardContent>
        </Card>
    )
}