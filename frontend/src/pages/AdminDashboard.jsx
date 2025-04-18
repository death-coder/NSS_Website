import { useState } from "react";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);  // We need this for the URL
  const [loading, setLoading] = useState(false);

  // const cloudName = import.meta.env.VITE_CLOUD_NAME;
  // const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
  const cloudName = window.env.CLOUD_NAME;
const uploadPreset = window.env.UPLOAD_PRESET;


  const handleImageUpload = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", uploadPreset); // 🔁 Change this
    data.append("cloud_name", cloudName); // 🔁 Change this

    const res = await fetch(
      // "https://api.cloudinary.com/v1_1/dfiyyyjp8/image/upload", // 🔁 Change this
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    // return result.secure_url;
    if (result.secure_url) {
      return result.secure_url;
    } else {
      throw new Error("Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!image) {
    //   alert("Please select an image");
    //   return;
    // }

    if (!title || !description || !date || !venue || !image) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    try {
      setLoading(true); 
      // const imageurl = await handleImageUpload();
      const uploadedImageUrl = await handleImageUpload();

      if (!uploadedImageUrl) {
        setLoading(false);
        return;  // Don't proceed if image upload failed
      }

      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          date,
          venue,
          imageurl: uploadedImageUrl,
        }),
      });

      const resData = await response.json();
      setLoading(false);

      if (response.ok) {
        alert("Event created successfully");
        setTitle("");
        setDescription("");
        setDate("");
        setVenue("");
        setImage(null);
        setImageUrl(null);

        document.getElementById("imageInput").value = "";
      } else {
        console.error("Server responded with error:", resData);
        alert("Failed to create event");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Create New Event
        </h2>

        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <input
          type="text"
          placeholder="Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

<input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full mb-6 p-2 border border-gray-300 rounded"
        />

        {loading && (
          <p className="text-blue-600 font-medium text-center mb-4">
            Uploading image...
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } text-white font-semibold py-2 rounded`}
        >
          {loading ? "Please wait..." : "Create Event"}
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;








// import React, { useState } from "react";
// const axios = window.axios;

// const AdminDashboard = () => {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     date: "",
//     venue: "",
//     imageurl: "",
//   });

//   const [uploading, setUploading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "nss_unsigned_preset"); // replace with your Cloudinary preset
//     data.append("cloud_name", "dfiyyyjp8"); // replace with your Cloudinary cloud name

//     try {
//       const res = await fetch("https://api.cloudinary.com/v1_1/dfiyyyjp8/image/upload", {
//         method: "POST",
//         body: data,
//       });
//       const result = await res.json();
//       setForm({ ...form, imageurl: result.secure_url });
//     } catch (err) {
//       alert("Image upload failed");
//       console.error(err);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/events", form);
//       if (res.status === 201) {
//         alert("Event created successfully!");
//         setForm({
//           title: "",
//           description: "",
//           date: "",
//           venue: "",
//           imageurl: "",
//         });
//       }
//     } catch (err) {
//       alert("Failed to create event");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
//       <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Create New Event</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Event Title" className="w-full p-3 border rounded" required />
//           <textarea name="description" value={form.description} onChange={handleChange} placeholder="Event Description" className="w-full p-3 border rounded" required />
//           <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full p-3 border rounded" required />
//           <input type="text" name="venue" value={form.venue} onChange={handleChange} placeholder="Venue" className="w-full p-3 border rounded" required />
          
//           <div>
//             <label className="block mb-1 font-semibold">Upload Image</label>
//             <input type="file" accept="image/*" onChange={handleImageUpload} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
//             {uploading && <p className="text-sm text-gray-400 mt-2">Uploading...</p>}
//             {form.imageurl && <img src={form.imageurl} alt="Preview" className="mt-3 rounded-md max-h-48" />}
//           </div>

//           <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
//             Create Event
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;





// ****************************************************************************************************************************************


// import React, { useState } from "react";

// const AdminDashboard = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [venue, setVenue] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const eventData = { title, description, date, imageUrl, venue };

//     try {
//       const response = await window.axios.post("http://localhost:5000/api/events", eventData);
//       alert("Event created successfully!");
//       setTitle("");
//       setDescription("");
//       setDate("");
//       setImageUrl("");
//       setVenue("");
//     } catch (error) {
//       console.error("Error: ", error);
//       alert("Failed to create event");
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: "600px" }}>
//       <h2 className="mb-4 text-center">Create New Event</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group mb-3">
//           <label>Title</label>
//           <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         </div>
//         <div className="form-group mb-3">
//           <label>Description</label>
//           <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
//         </div>
//         <div className="form-group mb-3">
//           <label>Date</label>
//           <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
//         </div>
//         <div className="form-group mb-4">
//           <label>Venue</label>
//           <input type="text" className="form-control" value={venue} onChange={(e) => setVenue(e.target.value)} required />
//         </div>
//         <div className="form-group mb-3">
//           <label>Image URL</label>
//           <input type="url" className="form-control" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
//         </div>
//         <button className="btn btn-success w-100" type="submit">Create Event</button>
//       </form>
//     </div>
//   );
// };

// export default AdminDashboard;
