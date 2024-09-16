import { Link } from "react-router-dom";

import { PageNotFoundIcon } from "assets/PageNotFoundIcon";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">Not Found!</h1>
      <PageNotFoundIcon />
      <p className="text-lg mb-4">The page was not found!</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}
