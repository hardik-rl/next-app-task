import { StarFillIcon } from "@/shared/Icon";
import React, { useEffect, useState } from "react";

const mockComments = [
    { id: 1, name: "Kang Haerin", date: "22 Jul 2022", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus" },
    { id: 2, name: "Bob", date: "22 Jul 2022", text: "Very insightful, looking forward to more." },
    { id: 3, name: "Charlie", date: "22 Jul 2022", text: "Loved the examples you included!" },
];

const CommentList = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchComments = () => {
        setLoading(true);
        setError(false);

        setTimeout(() => {
            const shouldFail = Math.random() < 0.25;
            if (shouldFail) {
                setError(true);
                setLoading(false);
            } else {
                setComments(mockComments);
                setLoading(false);
            }
        }, 1500);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div>
            {error && (
                <div className="error-box">
                    <p>Failed to load comments. Please try again.</p>
                    <button onClick={fetchComments} className="retry-btn">Retry</button>
                </div>
            )}

            {loading && !error && (
                <ul className="skeleton-list">
                    {[1, 2, 3].map((i) => (
                        <li key={i} className="skeleton-list__item">
                            <div className="skeleton-list__item-row name"></div>
                            <div className="skeleton-list__item-row line short"></div>
                            <div className="skeleton-list__item-row line"></div>
                        </li>
                    ))}
                </ul>
            )}

            {!loading && !error && comments.length > 0 && (
                <ul className="comment-list">
                    {comments.map((comment) => (
                        // <li key={comment.id} className="comment-item">
                        //     <p className="comment-name">{comment.name}</p>
                        //     <p className="comment-text">{comment.text}</p>
                        // </li>
                        <div key={comment.id} className="comments-card">
                            <img src="https://i.pravatar.cc/40?img=1" alt="user" />
                            <div>
                                <div className="comments-card__content">
                                    <span>{comment.name}</span>
                                    <div className="tour-guide__card-rating">
                                        <StarFillIcon />
                                        <StarFillIcon />
                                        <StarFillIcon />
                                        <StarFillIcon />
                                        <StarFillIcon />
                                        <span>(5.0)</span>
                                    </div>
                                    <span>{comment.date}</span>
                                </div>
                                <p className="comments-card__content-text">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                </p>
                            </div>
                        </div>
                    ))}
                </ul>
            )}

            {!loading && !error && comments.length === 0 && (
                <p className="no-comments">No comments yet.</p>
            )}
        </div>
    );
}

export default CommentList;