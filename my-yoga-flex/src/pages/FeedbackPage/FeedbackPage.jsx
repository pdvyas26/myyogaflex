import { useState } from 'react';
import axios from 'axios'; // make sure to install axios with `npm install axios`
import './FeedbackPage.scss';

function FeedbackPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        details: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/feedback`, formData);
            alert('Feedback submitted successfully');
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    const handleReset = () => {
      setFormData({
          name: '',
          email: '',
          details: ''
      });
  };

    return (
        <div className="form">
            <h1 className="form__title">CONTACT US</h1>
            <form onSubmit={handleSubmit}>
                <div className="form__container">
                    <label className="form__label">Name:</label>
                    <input className="form__input"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div div className="form__container">
                    <label className="form__label">Email:</label>
                    <input className="form__input"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div div className="form__container">
                    <label className="form__label">Details:</label>
                    <textarea className="form__input"
                        name="details" rows="10" cols="40"
                        placeholder="Enter additional details"
                        value={formData.details}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button className="form__buttons" type="submit">Submit</button>
                <button className="form__buttons" type="reset" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
}

export default FeedbackPage;
