import { OverlayTrigger, Popover } from "react-bootstrap";
import AddFeedUsers from "./AddFeedUsers";

const TopCourses = () => {
  const popover = (
    <Popover placement="top" id="popover-basic">
      <Popover.Content>
        These are the day’s trending courses on LinkedIn Learning.{" "}
        <span className="learn-more-link">Learn more</span>.
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <div className=" mt-2 pt-2 section-container courses-container">
        <div className="alsoViewed">
          <div className="d-flex justify-content-between">
            <h4 className="myprofileh4 text-left mb-3">Top Courses</h4>
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
              <i className="info-icon bi info-icon bi-info-square-fill"></i>
            </OverlayTrigger>
          </div>
            <div className="course-container">
                <div className="top-course-item">
                    <div className="course-name truncate"><p>1. How to Write an Epic Rock Song</p></div>
                    <div className="course-owner truncate">Mr. Schneebly</div>
                </div>
                <div className="top-course-item">
                    <div className="course-name truncate"><p>1. How to Write an Epic Rock Song</p></div>
                    <div className="course-owner truncate">Mr. Schneebly</div>
                </div>
                <div className="top-course-item">
                    <div className="course-name truncate"><p>1. How to Write an Epic Rock Song</p></div>
                    <div className="course-owner truncate">Mr. Schneebly</div>
                </div>

            </div>
          <div className="view-all-recommendations">
            <p>
              Show more on LinkedIn Learning
              <i className="bi bi-arrow-right"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCourses;
