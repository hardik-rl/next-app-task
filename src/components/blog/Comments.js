"use client";

import Button from "@/shared/Button";
import FormControl from "@/shared/FormControl";
import HeadingMd from "@/shared/HeadingMd";
import { GoodIcon, MsgIcon, StarFillIcon } from "@/shared/Icon";
import React, { useState } from "react";

const Comments = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState("😁");

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: comments.length + 1,
      name: formData.name,
      email: formData.email,
      text: formData.text,
      rating,
      date: new Date().toLocaleDateString("en-GB"),
    };

    setComments([newComment, ...comments]);

    setFormData({ name: "", email: "", text: "" });
    setRating("😁");
  };

  return (
    <section>
      {comments.length > 0 && (
        <div className="comment-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comments-card">
              <img src={`https://i.pravatar.cc/40?u=${comment.email}`} alt="user" />
              <div className="w-100">
                <div className="comments-card__content">
                  <span>{comment.name}</span>
                  <div className="tour-guide__card-rating">
                    {[...Array(5)].map((_, i) => (
                      <StarFillIcon key={i} />
                    ))}
                    <span>({comment.rating})</span>
                  </div>
                  <span>{comment.date}</span>
                </div>
                <p className="comments-card__content-text">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="comments-add">
        <HeadingMd>Add A Comment</HeadingMd>
        <form onSubmit={handleSubmit}>
          <div className="comment-form">
            <div className="flex-1">
              <div className="comment-form__row">
                <label htmlFor="name">Name</label>
                <FormControl
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange("name")}
                />
              </div>
              <div className="comment-form__row">
                <label htmlFor="email">Email</label>
                <FormControl
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange("email")}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="comment-form__row">
                <label htmlFor="comment">Comment</label>
                <FormControl
                  type="textarea"
                  rows={5}
                  placeholder="Your comment..."
                  value={formData.text}
                  onChange={handleChange("text")}
                />
              </div>
            </div>
          </div>

          <div className="comments__feedback-row">
            <div className="comments__feedback">
              <label>Rate The Usefulness Of The Article</label>
              <div className="comments__feedback-rating-options">
                {["😡", "😕", "😐", "🙂", "😁"].map((face) => (
                  <span
                    key={face}
                    onClick={() => setRating(face)}
                    style={{
                      opacity: rating === face ? 1 : 0.4,
                    }}
                  >
                    {face}
                  </span>
                ))}
                <Button className="btn--success">
                  <GoodIcon />
                  Good
                </Button>
              </div>
            </div>
            <Button type="submit" className="btn--align">
              <MsgIcon />
              Send
            </Button>
          </div>
        </form>
      </div>

    </section>
  );
};

export default Comments;
