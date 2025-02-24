import React from "react";
import "../css/project.css";

function Projects() {
    return (
        <div className="projects-container">
            <h1 className="projects-title">My Recent Works</h1>

            <div className="projects-grid">
                <div className="project">
                    <h2 >N-Queen Solver (Java, Swing)</h2>
                    <ul>
                        <li>Developed a Java-based N-Queen problem solver with <strong>real-time visualization</strong>.</li>
                        <li>Implemented an <strong>optimized backtracking algorithm</strong> to improve computation efficiency.</li>
                        <li>Created an <strong>interactive UI using Swing</strong> to demonstrate solutions dynamically.</li>
                    </ul>
                </div>

                <div className="project">
                    <h2 >Smart Home Automation System (IoT, ESP32, MQTT, Cloud)</h2>
                    <ul>
                        <li>Built an IoT-based home automation system using <strong>ESP32 and the Blynk App</strong> for remote control.</li>
                        <li>Integrated <strong>DHT11 sensor</strong> for temperature monitoring and <strong>PIR motion sensor</strong> for security alerts.</li>
                        <li>Used <strong>MQTT protocol</strong> for real-time data transmission and cloud connectivity.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;
