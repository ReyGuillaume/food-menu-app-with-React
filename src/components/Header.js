import './Header.css';

function RightContent (props) {
    if (props.cartButton) {
        return <button onClick={props.handleTogglePageContent}>
            {props.nbrArticles}
        </button>;
    }
}

export default function Header (props) {
    return (<div className="header-page">
        <div className="left-content">
            <h1>{props.leftContent}</h1>
        </div>
        <div className="right-content">
            <RightContent {...props}/>
        </div>
    </div>);
}