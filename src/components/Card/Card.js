import './Card.css'

function CardApp(props){
    const classes = `card ${props.className}`
    return <div className={classes}>{props.children}</div>
}

export default CardApp;