import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import moment from 'moment'


class PostCard extends Component {

  render() {
    return (
        <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
                <img
                  src={this.props.post.image}
                  alt={this.props.post.title}
                  decoding='async'
                  loading='async'
                  fetchpriority='low'
                  className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                  width="100%"
                  height="100%"
                />
            </div>
            <h1 className='transition duration-300 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
                <NavLink to={`/post/${this.props.post.slug}`}>
                    {this.props.post.title}
                </NavLink>
            </h1>
            <div className='bloc lg:flex text-center items-center justify-center mb-8 w-full'>
                <div className='font-medium text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>
                      {moment(this.props.post.created_at).format('YYYY年 M月 D日')}
                    </span>
                </div>
            </div>
            <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{this.props.post.excerpt}</p>
            <div className='text-center'>
                <NavLink to={`/post/${this.props.post.slug}`}>
                    <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
                        続けて読む
                    </span>
                </NavLink>
            </div>
        </div>
    )
  };
}

export default PostCard;
