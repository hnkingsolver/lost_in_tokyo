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

const Intro = () => 
<div className= "m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    <div className="mb3 mb4-ns">
        Lost in Tokyo is a directory of fun places to see, play in and explore, in Tokyo, Japan.
    </div>
    <div>
    From museums and galleries, to robot restaurants and kitten cafes, Tokyo is the gift that
    keeps on giving. Dattebayo!
    </div>
</div>


const App = () => (
    <div>
        <div className="min-vh-100 ph4 flex flex-column">
            {/* our navigation component */}
            <Intro />
            {/* our intro text component */}
        </div>
        <div className="flex flex-wrap container">{/* our attractions list component */}</div>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
