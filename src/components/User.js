import React, {useState} from 'react'
import {Media, Modal, ModalFooter, ModalBody, ModalHeader, Input, Button} from 'reactstrap'

const User = () => {


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2)

  const [modal3, setModal3] = useState(false);
  const toggle3 = () => setModal3(!modal3)

  const [modal4, setModal4] = useState(false);
  const toggle4 = () => setModal4(!modal4)
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

        <button class="btn btn-primary" type="button" onClick={toggle}>Profile</button>
            <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>My Profile</ModalHeader>
            <ModalBody>
                <ul>
                    <li>Phone Number: (317)-123-4567</li>
                    <li>Email Address: john.smith@email.com</li>
                    <li>Default Pharmacy: Walgreens</li>
                    <br></br>
                    <Button>Edit</Button>
                </ul>
            </ModalBody>
            <ModalFooter>
                <Button color="success" type="submit" onClick={toggle}>Update</Button>
                <Button color="danger" type="submit" onClick={toggle}>Exit</Button>
            </ModalFooter>

        </Modal>
        <button class="btn btn-primary" type="button" onClick={toggle2}>Order History</button>
        <Modal isOpen={modal2} toggle={toggle2}>
            <ModalHeader>Order History</ModalHeader>
            <ModalBody>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Medicine</th>
                        <th>Status</th>
                    </tr>
                </table>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" type="submit" onClick={toggle2}>Exit</Button>
            </ModalFooter>

        </Modal>
        <button class="btn btn-primary" type="button" onClick={toggle3}>My Prescriptions</button>
        <Modal isOpen={modal3} toggle={toggle3}>
            <ModalHeader>My Prescriptions</ModalHeader>
            <ModalBody>
                <table>
                    <tr>
                        <th>Medicine</th>
                        <th>Refills Available</th>
                        <th>Expiration</th>
                    </tr>
                </table>
                <Button>Get Refill</Button>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" type="submit" onClick={toggle3}>Exit</Button>
            </ModalFooter>

        </Modal>
        <button class="btn btn-primary" type="button" onClick={toggle4}>Payment Information</button>
        <Modal isOpen={modal4} toggle={toggle4}>
            <ModalHeader>Payment Information</ModalHeader>
            <ModalBody>
                <ul>
                    <li>Card Number: xxxx-xxxx-xxxx-1111</li>
                    <li>CVV: 222</li>
                    <li>Expiration Date: 03/04</li>
                    <br></br>
                    <Button>Edit</Button>
                </ul>
            </ModalBody>
            <ModalFooter>
                <Button color="success" type="submit" onClick={toggle4}>Update</Button>
                <Button color="danger" type="submit" onClick={toggle4}>Exit</Button>
            </ModalFooter>

        </Modal>
        </div>
        </div>
    )
}

export default User