import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="unsplash-images" className="w-full rounded object-cover h-50" />
      <div className="px-4 py-2">
        <div className="text-purple-500 font-bold mb-1">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: {image.views}</strong>
          </li>
          <li>
            <strong>downloads: {image.downloads}</strong>
          </li>
          <li>
            <strong>Likes: {image.likes}</strong>
          </li>
        </ul>
      </div>
      <div className="px-4 py-3">
          {tags.splice(0, 3).map((tag, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 text-gray-700 rounded mr-2 font-semibold text-sm inline-block">
              #{tag}
            </span>
          ))}
      </div>
    </div>
  )
}

export default ImageCard;