import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="flex h-screen">
          {/* Authentication Section */}
          <div className="w-full xl:w-[50%] flex justify-center items-center flex-col py-10">
            <Outlet />
          </div>

          {/* Image Section */}
          <div className="hidden xl:block w-[50%]">
            <img
              src="/assets/images/side-img.svg"
              alt="logo"
              className="h-screen w-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}
