// 스타일 관련
import useStyles from './styles'
// 컴포넌트 관련
import React from 'react'
import Header from '../../layout/Header'
import CardDetail from '../../components/CardDetail'

export default function CocktailDetail({match}) {
    const classes = useStyles();
    console.log(match);
    return (
        <div className={classes.root}>
            <Header prev={true} />
            <CardDetail variant={"basic"} id={match.params.id}/>
        </div>
    )
}