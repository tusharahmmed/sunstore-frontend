import React, { useRef, useState }  from 'react';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../Hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';



const Review = () => {

  const { user } = useAuth();

  const [feedback, setFeedback] = useState({});

  //notificaion
  const notify = () => toast.success('Review Accepted', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

  // field ref
  const nameRef = useRef('');
  const messageRef = useRef('');


  // on submit form
  const handleSubmit = e => {
    e.preventDefault();

     // get field value
     const name = nameRef.current.value;
     const message = messageRef.current.value;

     // set to state
     feedback.name = name;
     feedback.message = message;


    // add product to db
    fetch('https://polar-brook-92580.herokuapp.com/products/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(feedback)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
            notify();
        }
        console.log(data)
      });

    // reset form
    setFeedback({});
    e.target.reset();

  }



  const secondExample = {
    size: 30,
    count: 5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      feedback.rating = newValue;
    }
  };
  // <ReactStars {...secondExample} />

  return (
    <section className="add-product">
      <div className="register">
      <ToastContainer />
        <h4>Give A Review</h4>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input required name="name" ref={nameRef} class="form-control" id="name" defaultValue={user?.displayName} />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Feedback Message</label>
            <textarea name="message" ref={messageRef} class="form-control" required id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label for="img" class="form-label">Rating</label>
            <ReactStars {...secondExample} />
          </div>
          <button type="submit" className="form-submit-btn">Send Feedback</button>
        </form>
      </div>
    </section>
  );
};

export default Review;