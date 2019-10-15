import React from 'react'
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        borderRadius: '2rem'
    }
})

export default function StyledButton(props) {
    const styles = useStyles()
    const className = props.className || ""
    return (
        <Button color="primary" size="small" variant="contained" className={`${styles.button} ${className}`} {...props}>
            {props.children}
        </Button>
    )
}