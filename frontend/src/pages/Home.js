import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import chessboard from '../images/chessboard.jpeg';
import letters from '../images/letters.jpg';

function Home() {
    return (
        <div>
            <section className="introduction seccion-oscura">
                <div className="capsule">
                    <h1 className="seccion-titulo texto-negro" >Test Problem Solutions</h1>
                    <h2 className="seccion-descripcion">Welcome to this problem-solving page! Here, it is offer the solutions to intriguing challenges that require critical thinking and problem-solving skills. Take your time to explore the detailed explanations and approaches for each problem presented below. Choose the one that is interesting for you and verify the resolutions:</h2>
                </div>
            </section>
            <section className="problems-test seccion-clara d-flex flex-column">
                <div className="container text-center problems-capsule">
                    <div className="row">
                        {/* problem 1 */}
                        <div className="col-12 col-md-6">
                            <h3>Problem 1</h3>
                            <div className="problem">
                                <img src={chessboard} alt="problem1" />
                                <div className="overlay">
                                    <div className="description-capsule">
                                        <h3>Chess</h3>
                                        <p>Determining the number of squares a queen on a chessboard can attack, considering obstacles, based on its position</p>
                                    </div>
                                </div>
                                <Link to="/problem-1" className="btn btn-primary btn-block mb-3">Go to Problem 1</Link>
                            </div>
                        </div>
                        {/* problem 2 */}
                        <div className="col-12 col-md-6">
                            <h3>Problem 2</h3>
                            <div className="problem">
                                <img src={letters} alt="problem1" />
                                <div className="overlay">
                                    <div className="description-capsule">
                                        <h3>String value</h3>
                                        <p>Finding the maximum value of a function, which is derived from the length of substrings multiplied by their occurrences within a given string.</p>
                                    </div>
                                </div>
                                <Link to="/problem-2" className="btn btn-primary btn-block mb-3">Go to Problem 2</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;
