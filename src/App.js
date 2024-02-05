import logo from './logo.svg';
import './App.css';
import product from './Product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import React from 'react';
import products from './Product';

import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const firstname = "maram"
  return (
    <div className="App" >
{products.map((product) => (
      <Card style={{ width: '18rem', margin: '10px',height: '60%', padding: '10px', border: '2px solid black', borderRadius: '10px' }}>
      <Image className="card-img-top" image={product.image}/>
      <Card.Body>
        <Card.Title><Name name={product.name}/></Card.Title>
        <Card.Text>
        <Description description={product.description.slice(0,200)}/>
        <Price price={product.price}/>
        </Card.Text>
      </Card.Body>
    </Card>
))}
 <div style={{ textAlign: "center" }}>
        <p>Hello, {firstname ? firstname : "there"}!</p>
        {firstname && <img src={"https://ca-times.brightspotcdn.com/dims4/default/b2778e9/2147483647/strip/true/crop/4887x6058+0+0/resize/1200x1488!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F10%2F7c%2F4a0ecab74a07b9cb1bf15a94a49b%2Ftaylor-swift2.jpg"} alt={firstname} style={{ width: "50%",height: "50%" }} />}
      </div>

    </div>
  );
}

export default App;
