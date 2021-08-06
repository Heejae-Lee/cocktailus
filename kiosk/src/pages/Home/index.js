// 스타일 관련
import useStyles from './styles'
// 컴포넌트 관련
import React from 'react'

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <span className={classes.font}>cocktail.us</span>
        </div>
    )
}