import React from 'react'
import { makeStyles, Card, CardContent, Chip } from "@material-ui/core";

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
                <Chip label="category" />
            </CardContent>
        </Card>
    )
}