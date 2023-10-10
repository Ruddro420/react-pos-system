/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const SingleProduct = ({ item }) => {
    const { id, category, title, price, image } = item;
    return (
        <div className="single-main-container">
            <div className="single-container">
                <div className="product-img">
                    <img src={image} alt={title} />
                </div>
                <div className="product-title">
                    <h5>{title.slice(0, 10)}</h5>
                    <p>{category}</p>
                </div>
                <div className="product-price">
                    <span>{price} $</span>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;