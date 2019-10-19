import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    sizing: {
        '&.xs': {
            height: 8
        },
        '&.sm': {
            height: 16
        },
        '&.md': {
            height: 24
        },
        '&.lg': {
            height: 32
        },
        '&.xlg': {
            height: 48
        },
    }
})

export default function Gutter(props) {
    const style = useStyles()
    const size = props.size || 'xs'
    return (
        <div className={`${style.sizing} ${size}`} />
    )
}