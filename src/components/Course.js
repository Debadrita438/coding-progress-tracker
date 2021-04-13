import "../styles/courses/courses.scss";

const Course = ({ courses }) => {
    return (
        <>
            {courses.map((course) => (
                <div className="course" key={course.id}>
                    <div className="left">
                        <h2>
                            <strong>
                                {course.title} - {course.completed}/
                                {course.total}
                            </strong>
                        </h2>
                        <h1>{(course.completed / course.total) * 100}%</h1>
                    </div>
                    <div className="right">
                        <a href="/course">
                            <button>GO</button>
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Course;
