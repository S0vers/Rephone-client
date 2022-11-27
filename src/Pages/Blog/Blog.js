import React from 'react';

const Blog = () => {
    return (
        <div className='w-full lg:w-[980px] mx-auto mt-10'>
            <div tabIndex={0} className="collapse group border collapse-arrow">
                <div className="collapse-title text-center bg-blue-200 text-primary-content group-focus:bg-green-200 group-focus:text-secondary-content">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-blue-200 text-primary-content group-focus:bg-green-200 group-focus:text-secondary-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group border collapse-arrow">
                <div className="collapse-title text-center bg-blue-200 text-primary-content group-focus:bg-green-200 group-focus:text-secondary-content">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-blue-200 text-primary-content group-focus:bg-green-200 group-focus:text-secondary-content">
                    <p>In javascript Objects have a hidden property called [[Prototype]]. Using this method an object can inherit properties from another object.</p>
                    <p>For example let's say there is a object called "Car" which has properties wheels: 4, canDrive:true and another object "Honda" that has two property color:blue and sit:4. Now if we set that Honda inherits car then we call Honda.wheels we will get 4 as output even though Honda do that have a property called wheels but since Honda is inheriting car it can access its properties. If there was a function inside the car object it could access that too. This is how Prototypal Inheritance work on a basic level.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group border collapse-arrow">
                <div className="collapse-title text-center bg-blue-200 text-primary-content group-focus:bg-green-200 group-focus:text-secondary-content">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-blue-200 text-primary-content group-focus:bg-green-200 group-focus:text-secondary-content">
                    <p>Unit test is the process where the every small part of an application called unit is tested to see if it functions properly or not.</p>
                    <p>Unit test ensures that every individual part of the programme or application works properly. By doing unit testing we can find the bug early in the development period then on a later stage where it might be difficult to fix the problem. It is a important part of development process as the makes the programme and application much more bug free. Unit testing also makes the debugging process easier as we can test every component isolated of any dependency and find where the bug lies. It also gives the developer the chance to change the code base easily as they can know which part of the code is the problem. It also helps the developer to re-use code or move code around and use it on future project as it is a independent unit for use.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group border collapse-arrow">
                <div className="collapse-title text-center bg-blue-200 text-primary-content group-focus:bg-green-200 group-focus:text-secondary-content">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-blue-200 text-primary-content group-focus:bg-green-200 group-focus:text-secondary-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;