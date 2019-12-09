import React from 'react'

import './contact.scss'

export class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            message:''
        }
    }

    updateField = (field, value) => {
        this.setState({ [field]: value })
    }

    render() {
        return (
        <div className = "contact-wrapper">
				<form method="post" action="https://formspree.io/zechdrink@gmail.com">

                    <header>
						<h2>Interested in working together?</h2>
						<p>Get in Contact!</p>
					</header>

					<div className="row">

						<div className="name_email">

							<input type="text" name="name" id="name" placeholder="Name" autocomplete="off"/>
							<input type="text" name="email" id="email" placeholder="Email" autocomplete="off"/>

						</div>

						<div className="subject_message">

							<input type="text" name="subject" id="subject" placeholder="Subject" autocomplete="off"/>
							<textarea name="message" id="message" placeholder="Message" ></textarea>

						</div>

						<div className="buttons inp">
						    <ul className="actions">
								<li><input className="btn-one" type="submit" value="Send Message" /></li>
								<li><input type="reset" value="Clear Form" class="alt" /></li>
							</ul>
						</div>

					</div>
				</form>
        </div>
        )
    }
}

export default Contact