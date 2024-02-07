const Header = (props) => {
    return (
        <p>
            {props.course}
        </p>
    );
};

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    );
};

const Content = (props) => {
    return (
        <div>
            {props.parts.map((part, index) => (
                <Part key={index} part={part.name} exercises={part.exercises}/>
            ))}
        </div>
    );
};

const Total = (props) => {
    let totalExercises = 0;
    props.parts.map(part => totalExercises += part.exercises);

    return (
        <p>
            Number of exercises {totalExercises}
        </p>
    );
};

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]
    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
    );
};

export default App;
