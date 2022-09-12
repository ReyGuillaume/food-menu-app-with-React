import './Header.css';

function RightContent (props) {
    if (props.cartButton) {
        return <button onClick={props.handleTogglePageContent}>
            {props.cartContent.length}
        </button>;
    }
}

function LeftReturnButton (props) {
    if (!props.cartButton) {
        return <button onClick={props.handleTogglePageContent}>{"<"}</button>;
    }
    return <></>
}

export default function Header (props) {
    return (<div className="header-page">
        <div className="left-content">
            <h1>
                <LeftReturnButton 
                    cartButton={props.cartButton} 
                    handleTogglePageContent={props.handleTogglePageContent}
                />
                {props.leftContent}
            </h1>
        </div>
        <div className="right-content">
            <RightContent {...props}/>
        </div>
    </div>);
}