import React from 'react'
import {Media} from 'reactstrap'

const User = () => {
    return(
        <div>
        <div >
        <Media >
      <Media left href="#">
        <Media id='user-image' src="https://media.ttmind.com/Media/tech/article_51_7-18-20181-15-10PM.jpg" alt="User dummy image" />
      </Media>
      <Media id='user-info' class="float-child" body>

        <Media heading>
            John Smith
            </Media>
        1234 Blacksmith Street <br />
        Indianapolis, IN 46201 <br />
        (317) 123 - 4567 <br />
      </Media>
    </Media>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto" id="user-buttons">
        <button class="btn btn-primary" type="button">Profile</button>
        <button class="btn btn-primary" type="button">Order History</button>
        <button class="btn btn-primary" type="button">My Prescriptions</button>
        <button class="btn btn-primary" type="button">Payment Information</button>
        </div>
        </div>
    )
}

export default User