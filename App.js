// let heading = React.createElement('h1',{className: "heading"},'Rendering thru React...');

// let rooter = ReactDOM.createRoot(document.getElementById('root'));

// rooter.render(heading)

{/* <div class="parent">
    <div class="child">
        <h1>With children</h1>
    </div>
</div> */}

let something = React.createElement('div', { className: "parent" }, React.createElement('div', { className: "child" }, [React.createElement('h1', {}, "My name is Amir Hamza Shaik"), React.createElement('h2', {}, "This is h2 tag"),]), React.createElement('div', { className: "child2" }, [(React.createElement('h1', {}, "Amir Shaik"), React.createElement('h3', {}, "This is second child"))]));

console.log(something)
let rooter = ReactDOM.createRoot(document.getElementById('root'))


rooter.render(something)