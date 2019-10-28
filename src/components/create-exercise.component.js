import React, { Component } from "react";

export default class CreateExercises extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: ',',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    render() {
        return (
            <div>
                <p>
                    You're in the create ExercisesList Component
                </p>
            </div>
        )

    }
}