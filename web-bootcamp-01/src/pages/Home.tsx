import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <h1 className="text-4xl font-bold text-blue-500">
        Hello, Tailwind CSS with TypeScript!
      </h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Click Me
      </button>
      <Button variant="contained">Hello world</Button>;
    </div>
  );
};

export default Home;
