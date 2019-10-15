import React from 'react'
import Topbar from './Topbar'
import Grid from '@material-ui/core/Grid'
import Sidebar from './Sidebar'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    gutter: {
        height: 24
    },
    grid: {
        paddingLeft: '2%',
        paddingRight: '2%'
    }
})

export default function Wrapper(props) {
    const styles = useStyles()
    return (
        <section>
            <Box m={2}>
                <Topbar />
                <div className={styles.gutter} />
                <Grid container spacing={4} className={styles.grid}>
                    <Grid xs={12} md={4} lg={4} xlg={4} item>
                        <Sidebar />
                    </Grid>
                    <Grid xs={12} md={8} lg={8} xlg={8} item>
                        {props.children}
                    </Grid>
                </Grid>
            </Box>
        </section>
    )
}