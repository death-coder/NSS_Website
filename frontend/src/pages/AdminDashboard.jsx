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
    if (!image) {
      alert("Please select an image");
      return;
    }

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

      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/events`, {
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

