import React from 'react'
import { Divider, makeStyles, Card, CardContent, Chip, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        borderRadius: 16
    },
})


export default function MetaData() {
    const styles = useStyles()
    return (
        <Card className={styles.card}>
            <CardContent>
                <Typography variant="h5">
                    Categories
                </Typography>
                <Chip label="category" />
                <Divider />
            </CardContent>
        </Card>
    )
}