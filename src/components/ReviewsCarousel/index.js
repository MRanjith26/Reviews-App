// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {showProfile: 0}

  onRightClick = () => {
    const {showProfile} = this.state
    const {reviewsList} = this.props
    if (showProfile < reviewsList.length - 1) {
      this.setState(prevState => ({showProfile: prevState.showProfile + 1}))
    }
  }

  onLeftClick = () => {
    const {showProfile} = this.state
    if (showProfile > 0) {
      this.setState(prevState => ({showProfile: prevState.showProfile - 1}))
    }
  }

  render() {
    const {showProfile} = this.state
    const {reviewsList} = this.props

    const showReviews = reviewsList[showProfile]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousal-container">
          <button
            className="btn"
            data-testid="leftArrow"
            type="button"
            onClick={this.onLeftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
              className="img"
            />
          </button>
          <div className="card">
            <img
              src={showReviews.imgUrl}
              alt={showReviews.username}
              className="user-image"
            />
            <p className="user-name">{showReviews.username}</p>
            <p className="company-name">{showReviews.companyName}</p>
            <p className="para">{showReviews.description}</p>
          </div>

          <button
            className="btn"
            data-testid="rightArrow"
            type="button"
            onClick={this.onRightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
              className="img"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
