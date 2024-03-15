import React from 'react'

function cardComponent({imageUrl , description}) {
    return (
        <div className="card">
          <img src={imageUrl} alt="Card" className="card-image" />
          <div className="card-content">
            <p>{description}</p>
          </div>
        </div>
      );
}

export default cardComponent