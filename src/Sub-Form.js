import './Sub-Form.css'
import emailjs from 'emailjs-com';
//npm install emailjs-com --save

function SubForm(props){

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_3dcdh4n', 'template_2qyces5', e.target, 'user_faPYiM2sVYYVHImiwUcxP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return(
        <div className="SubForm">
            <form onSubmit={sendEmail}>
                <label htmlFor="from">Your Email:</label>
                <input type="text" name="from" placeholder="<name>@gmail.com"/>
                <label htmlFor="project">Enter Project Name:</label>
                <input type="text" name="project" placeholder="Project Name"/>
                <label htmlFor="message">Provide a brief overview of the Project:</label>
                <textarea name="message" placeholder="Describe what you want your developer to do"/>
                <input type="submit" className="button" value="Submit"/>
            </form>
            <h5><a href="mailto:krdevsolutions@gmail.com">Need to Contact a Dev?</a></h5>
        </div>
    );
}

export default SubForm;