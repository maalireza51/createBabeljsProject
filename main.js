const myName="Alireza";
const myId="exampleId";
const myClass="exampleClass";

// babel preproccess
const content = <div id={myId}><span className={myClass}>{myName}</span></div>

ReactDOM.render(content,document.getElementById('root'));
