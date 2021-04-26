import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import QuoteForm from "../components/QuoteForm";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    const quotes = this.props.quotes.map((quote) => (
      <QuoteCard quote={quote} />
    ));
    return (
      <div>
        <QuoteForm />
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">{quotes}</div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addQuote: (text) => dispatch({ type: "ADD_QUOTE", text }),
//   };
// };
export default connect(mapStateToProps, {
  removeQuote,
  upvoteQuote,
  downvoteQuote,
})(Quotes);
