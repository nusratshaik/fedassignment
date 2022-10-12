import React from "react";
import Sidebar from "./Sidebar";

import img1 from "../images/class.png";



const Main = () => {
    return (

    <div>

  <div className="article">
    <p className="container">
   
    <p id="home"></p>
    <h2>JavaScript Classes</h2>
    <p>JavaScript Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.</p>
     <p>Use the keyword class to create a class.</p>
     <p>Always add a method named constructor(): </p>
     <p className="hi">
      <h4>Syntax</h4>
      class ClassName &#123;<br></br>
      &nbsp; construtor() &#123; ... &#125;<br></br>
      &#125<br></br>
      <h4>Example</h4>
      class Car &#123;<br></br>
      &nbsp;  constructor(name, year) &#123;<br></br>
      &nbsp; &nbsp; this.name = name;<br></br>
      &nbsp; &nbsp;  this.year = year;<br></br>
      &nbsp; &#125;<br></br>
      &#125;

     </p>
     <img src={"img1"} alt=""/>
     <p>The example above creates a class named "Car".</p>
     <p>The class has two initial properties: "name" and "year".</p>
     <h3>Using a Class</h3>
     <p>When you have a class, you can use the class to create objects:</p>
     <p className="hi">
     let myCar1 = new Car("Ford", 2014);<br></br>
     let myCar2 = new Car("Audi", 2019); 

      </p>   
      <p>The example above uses the Car class to create two Car objects.</p>
        <p id="objects"></p>
<h2>JavaScript Objects</h2>
<p>

This code assigns a simple value (Fiat) to a variable named car:</p>
<h4>let car = "Fiat";</h4>
<p>Objects are variables too. But objects can contain many values.
</p>
<p>This code assigns many values (Fiat, 500, white) to a variable named car:</p>
<p className="hi">
const car = &#123;type:"Fiat", model:"500", color:"white" &#125;;
</p>
<p>The values are written as name:value pairs (name and value separated by a colon).</p>
<h3>Object Definition</h3>
<p>
You define (and create) a JavaScript object with an object literal:
</p>
<p className="hi">
  <h4>
  example
  </h4>
  const person = &#123;<br>
  </br>
  &nbsp; firstName: "John", <br></br>
  &nbsp;lastName: "Doe",<br></br>
  &nbsp; age: 50, <br></br>
    &nbsp;eyeColor: "blue" <br></br>
    &#125;;
</p>
<h3>Object Properties</h3>
<p>The name:values pairs in JavaScript objects are called properties:</p>
<p>Property	     Property Value</p>
<p>firstName    	John<br></br>
lastName         	Doe<br></br>
age             	50<br></br>
eyeColor        	blue</p>
<h3>Accessing Object Properties</h3>
<p>you can access object properties in the following way</p>
<h5>objectName.propertyName</h5>
<p className="hi">person.lastName;</p>
<p id="access"></p>

</p>
    
    
  </div>
    <Sidebar />
    </div>
    )
};

export default Main;