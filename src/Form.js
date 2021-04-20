import './Form.css'
import './Sub-Form.js'
import SubForm from './Sub-Form.js'

function Form(props) {

    return(
        <div className="Form">
            <h1 className="Header">Software/App Request</h1>
            <h3>Complete Form to create a Job Card @ KR-DevTech</h3>
            <br/>
            <SubForm/>
        </div>
    );
}

export default Form;