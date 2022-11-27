import React from 'react';

const Blog = () => {
    return (
        <div className='w-full lg:w-[980px] mx-auto mt-10'>
            <div tabIndex={0} className="collapse group border collapse-arrow">
                <div className="collapse-title text-center bg-blue-200 text-primary-content group-focus:bg-green-200 group-focus:text-secondary-content">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-blue-200 text-primary-content group-focus:bg-green-200 group-focus:text-secondary-content">
                    <p>
                        There are generally four types of state that is needed to be managed in a React application
                    </p>
                    <>
                        <li>Local State</li>
                        <li>Global State</li>
                        <li>Server State</li>
                        <li>URL State</li>
                    </>
                    <p>For local state meaning a state in that special part or the Ui component we use hooks like usestate and useref to store and display the data</p>
                    <p>For Global state meaning data which access is needed everywhere can be managed with contextApi and other similar API's.</p>
                    <p>Server state meaning the data that are being fetched from the a server to display or changed and sent back to the server. They can be managed with usestate and useeffect or we can use libraries like React Query or Axios to load the data for use.</p>
                    <p>URL state meaning change in link. It is used to navigate the website. we can manage this with React Router and make use correct url leads to correct part of the application.</p>
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
                    <p>React was developed by Facebook in 2013. It is still one of the most popular javascript library for building web application. React has the biggest community meaning there is huge amount of community support for problem solving and more components to streamline your project with additional libraries. React is also good for development of mobile app using react native. React uses a One-way data binding model. The biggest advantage React that was Virtual DOM. From recent survey it is still one of the most popular libraries to learn for job market. To use React we have to heavily depend on third-party developers and it uses Jsx instead of HTML which can take time getting used to.</p>
                    <p>Angular was developed by Google in 2016. It is one of the most popular web development javascript framework. Unlike React Angular is a framework. Since Angular is a component-based, it makes the components reusable. It also has a huge community support and get regular updates. Because there is no virtual DOM the render speed of the applications are slow compared to others. You also need knowledge of typescript. And the learning curve is much higher then React and Vue.</p>
                    <p>Vue.js was developed by Evan You an ex Google employee. It is very popular in the countries like China and many other western countries. Vue uses MVC structure. Ti is lightweight compared to Angular and react. It also uses Virtual DOM and has laravel support by default. It uses vanilla javascript so there is confusion and it is very users friendly. Buy compared to other libraries and framework this framework has the smallest community so the community support is not that good compared to the other two, meaning there are not that many community made libraries.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;