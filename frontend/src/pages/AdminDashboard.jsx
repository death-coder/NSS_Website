import { useState } from "react";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const cloudName = process.env.REACT_APP_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    if (result.secure_url) {
      return result.secure_url;
    } else {
      throw new Error("Image upload failed");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    } else {
      setImageUrl(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image");
      return;
    }
    if (!title || !description || !date || !venue) {
      alert("Please fill all fields and upload an image.");
      return;
    }
    try {
      setLoading(true);
      const uploadedImageUrl = await handleImageUpload();
      if (!uploadedImageUrl) {
        setLoading(false);
        return;
      }
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/admin/events`,
        {
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
        }
      );

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-blue-100 to-indigo-100 relative overflow-hidden">
      {/* Decorative blurred circle */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-60 pointer-events-none"></div>
      {/* Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/90 backdrop-blur-lg shadow-2xl rounded-xl p-8 w-full max-w-xl mx-4"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full mb-2 shadow">
            <svg
              className="w-10 h-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2
            className="text-3xl font-bold text-blue-700 mb-1"
            style={{ fontFamily: "'Gabriela', serif" }}
          >
            Create New Event
          </h2>
          <p className="text-gray-500 text-sm">Fill in the details below.</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Event Title</label>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Event Description</label>
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition resize-none"
            rows={3}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Venue</label>
          <input
            type="text"
            placeholder="Venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Event Image</label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
          {imageUrl && (
            <div className="mt-4 flex justify-center">
              <img
                src={imageUrl}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-lg border-2 border-blue-200 shadow"
              />
            </div>
          )}
        </div>

        {loading && (
          <p className="text-blue-600 font-medium text-center mb-4 flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            Uploading image...
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg font-semibold text-lg transition shadow-md flex items-center justify-center ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {loading ? "Please wait..." : "Create Event"}
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
