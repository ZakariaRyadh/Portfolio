import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="text-muted-foreground">This page does not exist.</p>
      <Link to="/" className="cosmic-button">
        Back home
      </Link>
    </div>
  );
};

export default NotFound;
