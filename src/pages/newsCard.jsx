import React from "react";
function UserWelcomeNewsCard({ imgSrc, title, description }) {
    return (
        <div className="user-welcome-news-card">
            <img
                className="user-welcome-news-card__img"
                src={imgSrc}
                alt="Нова стаття"
            />
            <h3 className="user-welcome-news-card__title">{title}</h3>
            <p className="user-welcome-news-card__description">{description}</p>
            <button className="user-welcome-news-card__button">Читати</button>
        </div>
    );
}

export default UserWelcomeNewsCard;
