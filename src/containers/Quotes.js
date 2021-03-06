import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

import {upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
              {
                this.props.quotes.map(q => <QuoteCard 
                  quote={q} 
                  store={this.props.store} 
                  onUpvote={this.props.upvoteQuote}
                  onDownvote={this.props.downvoteQuote}
                />)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
