import { useState } from "react";
import { useUserContext } from "@/context/AuthContext";
import Loader from "@/components/shared/Loader";
import { useNavigate } from "react-router-dom";
import { useUpdateUserProfile } from "@/lib/react-query/queries";

const UpdateProfile = () => {
  const { user } = useUserContext();
  const { mutate: updateUserProfile, isLoading } = useUpdateUserProfile('');
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: user.name || "",
    username: user.username || "",
    bio: user.bio || "",
    imageUrl: user.imageUrl || "",
  });

  // Handling form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handling image upload (for simplicity, we assume an image URL)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, imageUrl: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile(formData, {
      onSuccess: () => {
        navigate(`/profile/${user.id}`); // Redirect to profile after successful update
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      {/* Header aligned to the top-left */}
      <div className="flex items-center gap-2 mb-6">
        <img 
          src="/assets/icons/edit.svg" 
          alt="Edit" 
          height={36}
          width={36}
          className="" />
        <h1 className="text-3xl font-semibold text-white">Edit Profile</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={formData.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="profile"
            className="w-28 h-28 lg:h-36 lg:w-36 rounded-full object-cover border-4 border-gray-700"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="profile-pic"
          onChange={handleImageUpload}
        />
        <label htmlFor="profile-pic" className="text-primary-500 cursor-pointer text-center">
          Change Profile Picture
        </label>

        {/* Name Field */}
        <div className="w-full">
          <label className="text-gray-400 font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Username Field */}
        <div className="w-full">
          <label className="text-gray-400 font-semibold mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Bio Field */}
        <div className="w-full">
          <label className="text-gray-400 font-semibold mb-1">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            rows={4}
            placeholder="Tell us about yourself"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="bg-primary-500 text-white font-semibold py-2 rounded-lg hover:bg-primary-600 transition-colors w-full"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
