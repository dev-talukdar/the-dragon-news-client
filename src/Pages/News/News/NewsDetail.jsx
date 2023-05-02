import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom'; 

const NewsDetail = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, category_id, thumbnail_url, author, total_view, rating } = news;
    return (
        <Card>
      <Card.Img variant="top" src= {image_url} className='img-fluid' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {details}</Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All News in this Category</Button></Link>
        
      </Card.Body>
    </Card>
    );
};

export default NewsDetail;