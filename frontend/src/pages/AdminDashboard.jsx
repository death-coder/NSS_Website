import React, { useState } from "react";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [venue, setVenue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = { title, description, date, imageUrl, venue };

    try {
      const response = await window.axios.post("http://localhost:5000/api/events", eventData);
      alert("Event created successfully!");
      setTitle("");
      setDescription("");
      setDate("");
      setImageUrl("");
      setVenue("");
    } catch (error) {
      console.error("Error: ", error);
      alert("Failed to create event");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group mb-3">
          <label>Description</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group mb-3">
          <label>Date</label>
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group mb-4">
          <label>Venue</label>
          <input type="text" className="form-control" value={venue} onChange={(e) => setVenue(e.target.value)} required />
        </div>
        <div className="form-group mb-3">
          <label>Image URL</label>
          <input type="url" className="form-control" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <button className="btn btn-success w-100" type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default AdminDashboard;











// import React, { useState } from "react";

// function AdminDashboard() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: "",
//     imageUrl: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };



// const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Check if formData is correct
//     console.log("Form Data Submitted: ", formData);
  
//     try {
//       const response = await window.axios.post(
//         "http://localhost:5000/api/events",
//         formData
//       );
//       console.log("Response from server:", response.data);
  
//       alert("Event created successfully!");
//       setFormData({ title: "", description: "", date: "", imageUrl: "" });
//     } catch (err) {
//       console.error("Error: ", err);
//       alert("Failed to create event. Check console for details.");
//     }
//   };
  

//   return (
//     <div className="container mt-5" style={{ maxWidth: "600px" }}>
//       <h2 className="mb-4 text-center">Create a New Event</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group mb-3">
//           <label>Title</label>
//           <input
//             type="text"
//             className="form-control"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group mb-3">
//           <label>Description</label>
//           <textarea
//             className="form-control"
//             name="description"
//             rows="3"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <div className="form-group mb-3">
//           <label>Date</label>
//           <input
//             type="date"
//             className="form-control"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group mb-4">
//           <label>Image URL</label>
//           <input
//             type="text"
//             className="form-control"
//             name="imageUrl"
//             value={formData.imageUrl}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button className="btn btn-success w-100" type="submit">
//           Create Event
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AdminDashboard;
