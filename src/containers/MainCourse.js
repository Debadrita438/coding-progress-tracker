import Course from "../components/Course";

import { useState } from "react";

import "../styles/courses/mainCourse.scss";

const Courses = () => {
    // eslint-disable-next-line
    let [courses, setCourses] = useState([
        { id: 1, title: "Array", completed: 20, total: 20 },
        { id: 2, title: "Matrix", completed: 17, total: 20 },
        { id: 3, title: "String", completed: 12, total: 20 },
        { id: 4, title: "Searching & Sorting", completed: 12, total: 20 },
        { id: 5, title: "LinkedList", completed: 0, total: 20 },
        { id: 6, title: "Binary Trees", completed: 0, total: 20 },
        { id: 7, title: "Binary Search Trees", completed: 0, total: 20 },
        { id: 8, title: "Greedy", completed: 0, total: 20 },
        { id: 9, title: "BackTracking", completed: 0, total: 20 },
        { id: 10, title: "Stacks & Queues", completed: 0, total: 20 },
        { id: 11, title: "Heap", completed: 0, total: 20 },
        { id: 12, title: "Graph", completed: 0, total: 20 },
        { id: 13, title: "Trie", completed: 0, total: 20 },
        { id: 14, title: "Dynamic Programming", completed: 0, total: 20 },
        { id: 15, title: "Bit Manipulation", completed: 0, total: 20 },
    ]);

    return (
        <div className="all--courses">
            <Course courses={courses} />
        </div>
    );
};

export default Courses;
