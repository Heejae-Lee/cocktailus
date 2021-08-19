// 스타일 관련
import useStyles from './styles'
// 컴포넌트 관련
import React from 'react'
import Header from '../../layout/Header'
import CardDetail from '../../components/CardDetail'

export default function CocktailDetail({match}) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        type: "basic",
        prev: "/basic-cocktails"
    });

    React.useEffect(()=>{
        if(match.path.indexOf("basic") < 0){
            const newState = {
                type: "bookmark",
                prev: "/my-cocktails"
            };
            setState(newState);
        }
    },[match]);

    return (
        <div className={classes.root}>
            <Header prev={true}  to={state.prev}/>
            <CardDetail url={match.url} id={match.params.id}/>
        </div>
    )
}