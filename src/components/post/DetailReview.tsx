import React, { useContext } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PostContext } from "../../store/PostProvider";
import { AiFillStar } from "react-icons/ai";

const DetailReview = () => {
  const { slug } = useParams();
  const { state } = useContext(PostContext);

  const post = state.posts.find(
    (post) => post.id === Number(slug?.split("_")[1])
  );
  return (
    <Container className="mt-5 ">
      <Row>
        <Col lg={8}>
          <h3 className="">Title: {post?.title}</h3>
          <Card>
            <Card.Header>
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              {"  " + post?.productName}
              <Badge className="float-right">{post?.category}</Badge>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{post?.content}</p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">{post?.title}</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="my-5">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{post?.productName}</p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailReview;
