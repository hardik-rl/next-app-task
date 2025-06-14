"use client";

import Button from "@/shared/Button";
import FormControl from "@/shared/FormControl";
import HeadingMd from "@/shared/HeadingMd";
import { FourIcon, GoodIcon, MsgIcon, OneIcon, StarFillIcon, StarOutlineIcon, ThreeIcon, TwoIcon } from "@/shared/Icon";
import React, { useState } from "react";

const Comments = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(5);
  const [showToast, setShowToast] = useState(false);

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
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
    setComments([newComment, ...comments]);

    setFormData({ name: "", email: "", text: "" });
    setRating(5);
    setShowToast(false);

    setTimeout(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 10);

  };

  const getIconByRating = (rating) => {
  switch (rating) {
    case 1:
      return <OneIcon />;
    case 2:
      return <TwoIcon />;
    case 3:
      return <ThreeIcon />;
    case 4:
      return <FourIcon />;
    default:
      return null;
  }
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
                    {[...Array(5)].map((_, i) =>
                      i < comment.rating ? (
                        <StarFillIcon key={i} style={{ color: "#ffc107" }} />
                      ) : (
                        <StarOutlineIcon key={i} style={{ color: "#ddd" }} />
                      )
                    )}
                    <span>({parseFloat(comment.rating).toFixed(1)})</span>

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
                {[1, 2, 3, 4].map((face) => (
                  <span
                    key={face}
                    onClick={() => setRating(face)}>
                    {getIconByRating(face)}
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

      {showToast && (
        <div className="toast">Thank you! Your comment has been posted</div>
      )}

    </section>
  );
};

export default Comments;
