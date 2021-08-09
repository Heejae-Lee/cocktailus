// 스타일 관련
import useStyles from './styles'
// 컴포넌트 관련
import React from 'react'
import Header from '../../layout/Header'

export default function BasicCocktails() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header prev={true}/>
            basic cocktails
        </div>
    )
}