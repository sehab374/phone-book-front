// // components/Card.js
// import React from 'react';

// interface CardProps {
//   imageUrl: string;
//   name: string;
//   number: string;
//   email: string;
// }

// const Card: React.FC<CardProps> = ({ imageUrl, name, number, email }) => {
//   return (
//     <div className="card">
//       <img src={imageUrl} alt="Avatar" className="avatar" />
//       <div className="container">
//         <h4><b>{name}</b></h4>
//         <p>{number}</p>
//         <p>{email}</p>
//       </div>
//       <style jsx>{`
//         .card {
//           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//           transition: 0.3s;
//           width: 200px;
//           margin: 10px;
//         }

//         .card:hover {
//           box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
//         }

//         .container {
//           padding: 10px 16px;
//         }

//         .avatar {
//           width: 100px;
//           height: 100px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Card;
