import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import explanationchess from '../images/explanationchess.png';

const Problem1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const solveProblem = () => {
    axios.post(`http://localhost:8000/api/problem1/`, { input: inputValue })
      .then(response => {
        setOutputValue(response.data.problem1);
        setErrorMessage('');
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.error) {
          setErrorMessage("Please check the constraints and recommendations");
        } else {
          setErrorMessage('Please only numbers');
        }
        setOutputValue('');
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2>Problem 1: Chess</h2>
          <p>The problem involves determining the number of squares a queen can attack on a chessboard, considering obstacles. The board is represented by an n x n grid, and the queen can move in eight directions: left, right, up, down, and diagonally. Obstacles block the queen's path. Given the queen's position and obstacles, find the number of squares she can attack. The function queensAttack takes parameters n, k, rq, cq, and obstacles.</p>
          <hr />
          <h4>Recommendations</h4>
          <p>The first line contains two space-separated integers <strong>n</strong> and <strong>k</strong>, the length of the board's sides and the number of obstacles.
            The next line contains two space-separated integers <strong>rq</strong> and <strong>cq</strong>, the queen's row and column position.
            Each of the next <strong>k</strong> lines contains two space-separated integers <strong>r[i]</strong> and <strong>c[i]</strong>, the row and column position of <strong>obstacles[i]</strong>.</p>
          <h5>Sample Input 1</h5>
          <p>5 3<br />
            4 3<br />
            5 5<br />
            4 2<br />
            2 3<br /></p>
          <h5>Sample Output 1</h5>
          <p>10</p>
          <h5>Explanation</h5>
          <p>The queen is standing at position <strong>(4, 3)</strong> on a <strong>5x5</strong> chessboard with <strong>k = 3</strong> obstacles, then the number of squares she can attack from that position is <strong>10</strong>.</p>
          <img src={explanationchess} alt="explanationchess" />
          <div>
            <h5>Constraints</h5>
            <ul>
              <li>0 &lt; n ≤ 10<sup>5</sup></li>
              <li>0 ≤ k ≤ 10<sup>5</sup></li>
              <li>A single cell may contain more than one obstacle.</li>
              <li>There will never be an obstacle at the position where the queen is located.</li>
            </ul>
          </div>
          <textarea
            className="form-control mb-3"
            id="input-1"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter input here..."
            rows={7}
          ></textarea>
          <button onClick={solveProblem} className="btn btn-primary mb-3">Answer</button>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <p>The answer is:</p>
          <pre id="output-1" className="border p-3">{outputValue}</pre>
          <div style={{ textAlign: 'center' , marginBottom: '20px'}}>
            <Link to="/" className="btn btn-secondary mt-4">Return Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
