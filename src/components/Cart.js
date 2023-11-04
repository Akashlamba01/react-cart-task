import styles from "../styles/cart.module.css";
import "../styles/pagination.css";
import React, { Component } from "react";
import ReactPaginate from "react-paginate";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 0,
      resultData: this.props.data,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.receivedData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.receivedData();
    }
  }

  receivedData() {
    const { data } = this.props;
    const result = data;
    // console.log(result);
    // console.log(this.props);

    // console.log(data);
    const slice = result.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    const productData = slice.map((product) => (
      <React.Fragment>
        <div className={styles.cartItem}>
          <div className={styles.leftBlock}>
            <img src={product.images[0]} alt="product" />
          </div>
          <div className={styles.rightBlock}>
            <div style={{ fontSize: 25 }}>{product.name}</div>
            <div style={{ color: "#777" }}>Title: {product.title}</div>
            <div style={{ color: "#777" }}>
              Price: <span style={{ color: "black" }}>{product.price}$</span>{" "}
            </div>
            <div style={{ color: "#777" }}>
              Description: {product.description}
            </div>
            <div className={styles.cartItemActions}></div>
          </div>
        </div>
      </React.Fragment>
    ));

    this.setState({
      pageCount: Math.ceil(result.length / this.state.perPage),

      productData,
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    // console.log("jkjkjkjkj");
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  render() {
    return (
      <div className={styles.cart}>
        <center>
          <h1 style={{ marginBottom: "10px" }}>Cart</h1>
        </center>

        <div className={styles.cartManagement}>
          {this.state.productData}
          <div className={styles.listContainer}>
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    );
  }
}
