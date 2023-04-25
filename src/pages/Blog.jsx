import React from 'react'
import { SingleCard } from '../components/SingleCard'
import { connect } from 'react-redux'

const Blog = ({blogValue}) => {
  // console.log(blogValue);
  return (
    <>
      <section className='body-blog py-5 container'>
        <div className="row g-5 m-0">
          {
            blogValue.map(item=>(
              <SingleCard 
              title={item.title} 
              desc={item.desc} 
              key={item.id} 
              img={item.img} 
              id={item.id}
              />
            ))
          }
        </div>
      </section>
    </>
  )
}

const mapStateToProps =(state)=>{
    return {
      blogValue: state
    }
}

export default connect (mapStateToProps) (Blog)