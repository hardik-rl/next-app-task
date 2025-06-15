"use client"
import Button from '@/shared/Button'
import FormControl from '@/shared/FormControl'
import HeadingMd from '@/shared/HeadingMd'
import { GoodIcon, MsgIcon, StarFillIcon } from '@/shared/Icon'
import React from 'react'
import CommentList from '../CommentList'

const Comments = () => {
  return (
    <section>
      {/* <HeadingMd>Comments</HeadingMd> */}

      {/* <div className="comments-card">
        <img src="https://i.pravatar.cc/40?img=1" alt="user" />
        <div>
          <div className="comments-card__content">
            <span>Kang Haerin</span>
            <div className="tour-guide__card-rating">
              <StarFillIcon />
              <StarFillIcon />
              <StarFillIcon />
              <StarFillIcon />
              <StarFillIcon />
              <span>(5.0)</span>
            </div>
          </div>
          <p className="comments-card__content-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
        </div>
      </div> */}
      {/* <CommentList /> */}

      <div className="comments-add">
        <HeadingMd>Add A Comment</HeadingMd>
        <form>
          <div className="comment-form">
            <div className='flex-1'>
              <div className="comment-form__row">
                <label htmlFor="name">Name</label>
                <FormControl type="text" placeholder="Name" />
              </div>
              <div className="comment-form__row">
                <label htmlFor="email">Email</label>
                <FormControl type="email" placeholder="Email" />
              </div>
            </div>
            <div className='flex-1'>
              <div className="comment-form__row">
                <label htmlFor="email">Comment</label>
                <FormControl type="textarea" rows={5} placeholder="Search Anything..." />
              </div>
            </div>
          </div>

          <div className="comments__feedback-row">
            <div className="comments__feedback">
              <label>Rate The Usefulness Of The Article</label>
              <div className='comments__feedback-right'>
                <div className="comments__feedback-rating-options">
                  <span>😡</span>
                  <span>😕</span>
                  <span>😐</span>
                  <span>🙂</span>
                  <span>😁</span>
                   <Button className="btn--success"><GoodIcon />Good</Button>
                </div>
              </div>
            </div>
            <Button className="btn--align"><MsgIcon />Send</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Comments