import './NavBarFooter.css';

function NavItemIcon (props) {
    switch (props.content) {
        case "Menu":
            return <i className="fa-solid fa-hat-chef"></i>;
        case "Profile":
            return <i className="fa-solid fa-user"></i>;
        case "Restaurants":
            return <i className="fa-solid fa-location-dot"></i>;
        default:
            return <i className="fa-solid fa-user"></i>;
    }
}

function NavItem (props) {
    const navItemClass = `nav-element ${props.isActive ? "active" : ""}`;

    return (<div className={navItemClass}>
        <NavItemIcon content={props.content}/>
        <span>{props.content}</span>
    </div>);
}

export default function NavBarFooter () {
    return (<nav className='main-nav'>
        <NavItem content="Menu" isActive={true} />
        <NavItem content="Profile" isActive={false} />
        <NavItem content="Restaurants" isActive={false} />
    </nav>);
}