
import {

    Bookings,
    HeadingTag,
    PaymentContainer,
    Text2,
    Containers,
    Payment,
  } from "./Styling";
  
  import StripeCheckout from "react-stripe-checkout";

  function ConfirmBooking() {
    function handleToken(token, addresses) {
      console.log({ token, addresses });
    }
  
  
    return (
      <Bookings>
        <Payment>
          <HeadingTag>
          
            <h1>Payment</h1>
          </HeadingTag>
         
          <Containers>
            <PaymentContainer>
              <Text2>Card Payment</Text2>
              {/* react-stripe-checkout is used for payment.  */}
              <StripeCheckout
                stripeKey="pk_test_51KuyaPSCQaVx7HBe8OxRf2sNJR6frOJUsRuVFJzPvui7Ni4icPjxO5u1YjNTWAwFtK9xxxQS03dMb6aetPKBxzSP004S3AwqfR"
                token={handleToken}
                billingAddress
                shippingAddress
                currency="inr"
                amount={ ""}
                name="Service Charge"
              />
            </PaymentContainer>
          </Containers>
        </Payment>
      </Bookings>
    );
  }
  
  
  
  export default ConfirmBooking;