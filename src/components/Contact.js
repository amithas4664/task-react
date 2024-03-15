import { Button } from 'antd'
import React from 'react'

function Contact() {
  return (
    <div className='contactWrapper'>
        <h2>Interested in delving deeper into the project?</h2>
        <p>
        If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect.
         You can reach out to us via email at <span>hello@abc.com</span> or give us a call at <span>+91 480 20802730</span>.
        </p>
        <div className='btnWrapper'>
            <Button type='secondary' className='secondary-btn'>Ring us on Skype</Button>
            <Button type='primary' className='primary-btn'>Contact Us</Button>
        </div>
    </div>
  )
}

export default Contact