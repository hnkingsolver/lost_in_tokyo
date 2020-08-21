//a Title component
// const Title = props => (
// <h1 className = "tc"> {props.title}</h1>
// )

//another Banner component
// const Banner = props => (
// <h1 className = "tc f1 yellow pa3">
//     Hello, {props.firstName} {props.lastName}
// </h1>
// );
// our components always need a single wrapper element at the top... like a div
// const App = () => (
//     <div>
//         <Title title= "Welcome to my website!"/>
//         <Banner firstName="Hannah" lastName="Kingsolver"/>
//     </div>
// )

const Highlight = ({ color, children }) => (
    <span className={`relative highlight highlight-${color}`}>
        <span className="relative z-2">{children}</span>
    </span>
);

const Intro = () => (
    <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
        <div className="mb3 mb4-ns">
            <Highlight color="aqua">Lost in Tokyo</Highlight> is a directory of fun
            places to see, play in and <Highlight color="yellow">explore</Highlight>,
            in <Highlight color="blue">Tokyo</Highlight>, Japan.
    </div>
        <div>
            From <Highlight color="blue">museums</Highlight> and{" "}
            <Highlight color="blue">galleries</Highlight>, to{" "}
            <Highlight color="pink">robot restaurants</Highlight> and{" "}
            <Highlight color="pink">kitten cafes</Highlight>, Tokyo is the gift that
            keeps on giving. <Highlight color="yellow">Dattebayo!</Highlight>
        </div>
    </div>
);

// the ({className, href, children}) grabs our properties directly
// it means we dont have to type out  props.className, props.href, etc...
const NavItem = ({ className, href, children, logo }) => (
    <li className={`mh2-ns f6 f4-l tc ${className}`}>
        <a className='white no-underline' href={href}>
            {/* here we check for the logo prop, if we have it, we render out our logo
        otherwise, we just render out our regular vanagation text (children prop) */}
            {logo ? <img src="../images/logo.svg" className="db center logo" /> : children}
        </a>

    </li>
)

const Nav = () => (
    <nav className='pt3 pt4-s mb4 mb0-ns'>
        <ul className='list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0'>
            {menu.map(item => (
                <NavItem {...item} /> //the {...items} is called an object spread
                // It takes our object’s properties and lays them out onto our component for us.
            ))}
        </ul>
    </nav>
)

const Overlay = ({showInfo, title, description, link}) => (
    <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
                    style={{
                        //we do a test to see whether or not its true,
                        // if it is, we change the transform to be none, otherwise -100%
                        transform: showInfo ? 'none' : 'translateY(-100%)'
                    }}
                    >
                        <div>
                            <a className="no-underline" href={link} >
                                <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
                            <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
                            </a>
                        </div>
                    </div>
)

//we can also create components as classes
//these give us more advance functionality and features such as the component life cycle 
//as well as react's in-built state
class Attraction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false
        };
        //here we tell our toggleInfo about this by using bind
        // otherwise, things like setState will not work
        this.toggleInfo = this.toggleInfo.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
    }
//this is our own method
toggleInfo() {
    this.setState((prevState, props) => ({
        //here we invert our showInfo boolean by using the
        //previous state and the ! exclamation mark
        showInfo: !prevState.showInfo
    }));
}

closeInfo() {
    this.setState({
        //here we use setState the usual way becasue we dont need to
        //access the previous state, we're just force setting the
        //showInfo to be false
        showInfo: false
    });
}


    render() {
        const { title, description, className, image } = this.props;
        const {showInfo} = this.state
        return (
            <div
                className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
                onClick ={this.toggleInfo} 
                //this runs when mouse leaves the attraction element
                onMouseLeave={this.closeInfo}
                >
                <div className="relative">
                    {/* here we remember to pass along all of our props and state*/}
                    <Overlay {...this.props} {...this.state}/>
                    <img src={`../images/${image}`} className="db" />
                </div>
            </div>
        );
    }
}

const App = () => (
    <div>
        <div className="min-vh-100 ph4 flex flex-column">
            {/* our navigation component */}
            <Nav />
            {/* our intro text component */}
            <Intro />
        </div>
        {/* our attractions list component */}
        <div className="flex flex-wrap container">
            {attractions.map(attraction =>
                <Attraction {...attraction} />
            )}
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
