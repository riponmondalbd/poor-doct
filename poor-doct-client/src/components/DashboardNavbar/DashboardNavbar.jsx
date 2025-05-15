import useAuth from "../../hooks/useAuth";

const DashboardNavbar = ({ pageTitle }) => {
  const { user } = useAuth();
  return (
    <div className="navbar min-h-24 bg-base-300 flex justify-between md:px-5">
      <h3 className="text-xl font-semibold">{pageTitle}</h3>
      <h3 className="text-xl font-semibold">{user.displayName}</h3>
    </div>
  );
};

export default DashboardNavbar;
