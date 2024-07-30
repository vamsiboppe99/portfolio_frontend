import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';
import axios from 'axios';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(11, 46, 91, 0.7);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(232, 241, 252, 0.15);
`;

const Title = styled.h2`
  color: #e8f1fc;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;
  background: rgba(232, 241, 252, 0.1);
  border: 2px solid #e8f1fc;
  border-radius: 5px;
  color: #e8f1fc;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(232, 241, 252, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;
  background: rgba(232, 241, 252, 0.1);
  border: 2px solid #e8f1fc;
  border-radius: 5px;
  color: #e8f1fc;
  font-size: 1rem;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(232, 241, 252, 0.5);
  }
`;

const Icon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #e8f1fc;
`;

const MessageIcon = styled(Icon)`
  top: 1.5rem;
`;

const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

const Button = styled.button`
  background-color: #e8f1fc;
  color: #0b2e5b;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #ffffff;
    animation: ${shake} 0.5s ease-in-out;
  }
`;

const Plane = styled(FaPaperPlane)`
  animation: ${float} 2s ease-in-out infinite;
`;

const Message = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: ${props => props.error ? '#ff6b6b' : '#e8f1fc'};
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSubmitMessage('');
    try {
      const response = await axios.post('http://localhost:8000/api/contact/', formData);
      console.log('Response:', response.data);
      setSubmitMessage('Message sent successfully!');
      setIsError(false);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      setIsError(true);
      if (error.response && error.response.data) {
        setErrors(error.response.data);
        setSubmitMessage('Please correct the errors and try again.');
      } else {
        setSubmitMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <ContactContainer>
      <Title>Get In Touch</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Icon><FaUser /></Icon>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Icon><FaEnvelope /></Icon>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <MessageIcon><FaCommentAlt /></MessageIcon>
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></TextArea>
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </InputGroup>
        <Button type="submit">
          Send Message <Plane />
        </Button>
      </Form>
      {submitMessage && <Message error={isError}>{submitMessage}</Message>}
    </ContactContainer>
  );
}

export default Contact;