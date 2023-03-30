import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Characters = ({characters = []}) => {
  const dispatch = useDispatch()
  const {posts, loadingPosts} = useSelector((state)=> state.PostsReducer)

  
  return (
    <Container>
       <div className='row'>
    {characters.map((item, index) => (
            <div key={index} className='col mb-5'>
                <div className='card' style={{minWidth: "100px"}}>
                    <img src={item.img} alt="" />
                    <div className='card-body'>
                        <h5 className='card-title badge bg-info text-dark'>{item.name}</h5>
                        <hr />
                        <h5 className='badge bg-danger'>Level: {item.level}</h5>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </Container>
   
  );
};

export default Characters
