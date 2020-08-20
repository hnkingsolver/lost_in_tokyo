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

const App = () => (
    <div>
        <div className="min-vh-100 ph4 flex flex-column">
            {/* our navigation component */}
            <Nav />
            <Intro />
            {/* our intro text component */}
        </div>
        <div className="flex flex-wrap container">
            {/* our attractions list component */}
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
