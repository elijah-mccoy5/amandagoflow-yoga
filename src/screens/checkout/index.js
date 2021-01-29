import React, { useState, useRef, useEffect } from 'react';
import image4 from '../../assets/amandagoflow-img4.jpeg'
import image14 from '../../assets/amandagoflow-img14.JPG'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './index.css'

function Product({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: 'USD',
                  value: product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  if (paidFor) {
    return (
      <div>
        <button type="button" class="btn btn-lg btn-block btn-outline-info">Purchased</button>
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <div ref={paypalRef} />
    </div>
  );
}

function Checkout() {
  const products = [
      {
    name: 'Single Zoom Class Drop In',
    price: 15.00,
      }, 
      {
        name: 'Zoom Bundle 1',
        description: 'fancy chair, like new',
        price: 39.00,
      },
      {
        name: 'Zoom Bundle 2',
        description: 'fancy chair, like new',
        price: 72.00,
      },
      {
        name: 'Zoom Bundle 3',
        description: 'fancy chair, like new',
        price: 110.00,
      },
      {
        name: 'Private Session 1',
        description: 'fancy chair, like new',
        price: 30.00,
      },
      {
        name: 'Private Session 2',
        description: 'fancy chair, like new',
        price: 40.00,
      },
      {
        name: 'Private Session 3',
        description: 'fancy chair, like new',
        price: 50.00,
      },
      {
        name: 'Private Session 4',
        description: 'fancy chair, like new',
        price: 65.00,
      },
      {
        name: 'Private Session 5',
        description: 'fancy chair, like new',
        price: 65.00,
      },
      {
        name: 'Private Session 1',
        description: 'fancy chair, like new',
        price: 130.00,
      },
      {
        name: 'Private Session 2',
        description: 'fancy chair, like new',
        price: 180.00,
      },
      {
        name: 'Private Session 3',
        description: 'fancy chair, like new',
        price: 230.00,
      },
      {
        name: 'Private Session 4',
        description: 'fancy chair, like new',
        price: 305.00,
      },
      {
        name: 'Private Session 5',
        description: 'fancy chair, like new',
        price: 305.00,
      },
    ]

  return (
      <>
       <div className="pricing-picture" alt="amandagoflow">
        <Header/>
           </div>
           <h1 className="book-class">Pricing</h1>
    <div className="App">
        <div className="text-center">
    <div className="container">
        <div className="row pt-4">
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">  Zoom Class Drop In </h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$15 </b><small className="text-muted">/ class</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Yoga and Fitness Training</li>
                        
                        </ul> 
                    </div>
                    <Product product={products[0]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Zoom Class Bundle 1</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$39 </b><small className="text-muted">/ 3 classes</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[1]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Zoom Class Bundle 2</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$72 </b><small className="text-muted">/ 6 classes</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[2]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Zoom Class Bundle 3</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$110 </b><small className="text-muted">/ 10 classes</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[3]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Private Session 1</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$30  </b><small className="text-muted">/ 35 mins</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[4]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Private Session 2</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$40  </b><small className="text-muted">/ 50 mins</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[5]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Private Session 3</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$50  </b><small className="text-muted">/ 60 mins</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[6]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Private Session 4</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$65  </b><small className="text-muted">/ 75 mins</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[7]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Private Session 5</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$80 </b><small className="text-muted">/ 90 mins</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[8]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Private Session Bundle 1</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$130  </b><br/><small className="text-muted"> Bundle of 5 <br/>35 min classes</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[9]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Private Session Bundle 2</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$180  </b><br/><small className="text-muted"> Bundle of 5 <br/>50 min classes</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[10]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Private Session Bundle 3</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$230 </b><br/><small className="text-muted"> Bundle of 5 <br/>60 min classes</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[11]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Private Session Bundle 4</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$305  </b><br/><small className="text-muted"> Bundle of 5 <br/>75 min classes</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[12]} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Private Session Bundle 5</h4>
                    </div>
                    <div className="card-body">
                        <h1><b>$350  </b><br/><small className="text-muted">Bundle of 5 <br/>90 min classes</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>Yoga and Fitness Training</li>
                          
                        </ul> 
                    </div>
                    <Product product={products[13]} />
                </div>
            </div>
        </div>
        
   
    </div>
</div>

    </div>
    <p className="book-policy">

All sales are final. 
If the client has to cancel the session or withdraw from class the client must cancel within 48 hours notice to obtain credit for that session or class. 
If the client does not notify the instructor within 48 hours, there will be no credited 
refund available. 

If the instructor cancels - the client will receive credit for another class or session with instructor. This way the client and instructor can reconvene at another time</p>
<hr/>

<Footer/>
    </>
  );
}

export default Checkout;