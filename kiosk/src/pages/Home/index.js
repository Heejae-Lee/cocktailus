// 스타일 관련
import useStyles from './styles'
// 컴포넌트 관련
// 컴포넌트 관련
import React from 'react'
import Header from '../../layout/Header'
import MainMenus from '../../layout/MainMenus'

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <MainMenus />
        </div>
    )
}