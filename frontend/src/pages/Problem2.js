import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import substring from '../images/substring.png'
const Problem2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const solveProblem = () => {
    axios.post(`http://localhost:8000/api/problem2/`, { input: inputValue })
      .then(response => {
        setOutputValue(response.data.problem2);
        setErrorMessage('');
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.error) {
          setErrorMessage("Please check the constraints and recommendations");
        } else {
          setErrorMessage('Please check the constraints and recommendations');
        }
        setOutputValue('');
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Problem 2: Substring Value</h2>
          <p>
            The problem involves calculating the maximum value of a function, <strong>f(s)</strong>, for all substrings <strong>s</strong> of a given string <strong>t</strong>. This function is computed by multiplying the length of <strong>s</strong> by the number of times it appears in <strong>t</strong>.
          </p>
          <hr />
          <h4>Recommendations</h4>

          <p> The task is to find the maximum value of <strong>f(s)</strong> among all substrings of <strong>t</strong>.
            <br /> f(s) = |s| × Number of times s occurs in t</p>

          <h5>Sample Input 1</h5>
          <p>"aaaaaa"</p>
          <h5>Sample Output 1</h5>
          <p>12</p>

          <h5>Explanation</h5>
          <p>
            In the given sample, the string <strong>"aaaaaa"</strong> is evaluated to find the maximum value of the function <strong>f(s)</strong>.
            The function calculates the product of the length of the substring <strong>s</strong> and the number of times it occurs in the string <strong>t</strong>.
            In this case, the maximum value of <strong>f(s)</strong> among all substrings is 12, achieved when the substring is <strong>"aaa"</strong> or <strong>"aaaa"</strong> for the first case it will multiply by 4, and the second case as shown the image multiply by 3.
          </p>
          <img src={substring} alt="substring" style={{ width: '350px', height: '200px' }} />

          <div>
            <h5>Constraints</h5>
            <p>1 &le; |t| &le; 10<sup>5</sup></p>
            <p>The string consists of lowercase English alphabets.</p>
          </div>
          <textarea
            className="form-control mb-3"
            id="input-2"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your input here..."
            rows={5}
          ></textarea>
          <button onClick={solveProblem} className="btn btn-primary mb-3">Answer</button>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <p>The answer is:</p>
          <pre id="output-2" className="border p-3">{outputValue}</pre>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Link to="/" className="btn btn-secondary mt-4">Return Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
