import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const DashboardNavbar = ({ pageTitle }) => {
  const { user } = useAuth();
  const [, currentUser] = useUser();
  // console.log(currentUser[0]?.name);
  return (
    <div className="navbar min-h-24 bg-base-300 flex justify-between md:px-5">
      <h3 className="text-xl font-semibold">{pageTitle}</h3>
      <h3 className="text-xl font-semibold">
        {currentUser[0]?.name || user.displayName}
      </h3>
    </div>
  );
};

export default DashboardNavbar;
