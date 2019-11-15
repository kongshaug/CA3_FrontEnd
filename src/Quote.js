import React, { useEffect, useState } from "react";
import facade from "./apiFacade";
import "./App.css";
const QuoteRow = ({ quote }) => {
  return (
    <tr>
      <td> {quote.quoteText} </td>
      <td> {quote.quoteAuthor} </td>
    </tr>
  );
};

export default function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      try {
        const data = await facade.getQuotes();
        setQuotes(data);
        setFetching(true);
      } catch (error) {
        alert("UPSSS " + error);
      }
    };
    getQuote();
  }, []);

  const tableItems = quotes.map((quote, index) => (
    <QuoteRow key={index} quote={quote} />
  ));

  const QuotesTable = () => {
    return fetching ? (
      <table id="table">
        <thead>
          <tr>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>{tableItems}</tbody>
      </table>
    ) : (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  };
  return (
    <div>
      <br></br>
      <br></br>
      <h2>Inspirational quotes</h2>
      <br></br>
      <QuotesTable />
    </div>
  );
}
