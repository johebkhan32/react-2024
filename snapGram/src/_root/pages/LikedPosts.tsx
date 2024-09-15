import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queries";

const LikedPosts = () => {
  const { data: currentUser } = useGetCurrentUser();

  if (!currentUser)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-10">
      {/* Header Section */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-4">
        <img
          src="/assets/icons/like.svg"
          width={36}
          height={36}
          alt="Liked Posts"
          className="invert"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-white">Liked Posts</h2>
      </div>

      {/* No Liked Posts */}
      {currentUser.liked.length === 0 ? (
        <div className="flex justify-center items-center mt-20">
          <p className="text-gray-400 text-lg font-medium">
            You haven't liked any posts yet.
          </p>
        </div>
      ) : (
        // Grid of Liked Posts
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <GridPostList posts={currentUser.liked} showStats={false} />
        </div>
      )}
    </div>
  );
};

export default LikedPosts;






