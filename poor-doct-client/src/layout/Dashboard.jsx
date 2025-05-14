import { NavLink } from "react-router";
import useDark from "../hooks/useDark";
import useScroll from "../hooks/useScroll";

const Dashboard = () => {
  const { scrollToTop } = useScroll();
  const { isDark, setIsDark } = useDark();
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-1/6 bg-amber-300 min-h-screen p-2">
          {/* make dark mode or theme changer dark and white */}
          <label className="flex cursor-pointer gap-2 ml-6 pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="sunset"
              className="toggle theme-controller"
              checked={isDark}
              onChange={() => setIsDark(!isDark)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {/* shared nav */}
          <ul className="menu w-full p-4 space-y-3">
            <li>
              <NavLink
                to={"/"}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  isActive ? "text-[#e12454] font-bold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  isActive ? "text-[#e12454] font-bold" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  isActive ? "text-[#e12454] font-bold" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-5/6 p-2">
          <p>Right side content</p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab sit
            beatae optio et nemo voluptas possimus iure esse? Cum nisi
            voluptates maiores consequatur perferendis aspernatur ipsam quia, ad
            eligendi dolorum magnam dignissimos quo consequuntur magni fugiat
            recusandae provident asperiores. Dolores quas, dignissimos quibusdam
            omnis officia quaerat, minus molestiae modi, ad libero cupiditate
            in. Similique eveniet accusantium, corrupti vel dolores ullam
            suscipit mollitia quo. Consectetur voluptas, blanditiis, temporibus
            facilis nisi molestiae repudiandae illum, exercitationem voluptatem
            vel asperiores. Accusamus molestiae nisi iusto eum pariatur numquam.
            Laudantium possimus aut velit dolorem, rem, saepe mollitia optio
            voluptas aspernatur, fuga vitae porro exercitationem ipsam ea rerum
            esse tempora expedita. Odit et harum sint sequi, laudantium
            reprehenderit cum ad praesentium aliquam beatae exercitationem magni
            ex! Aperiam dolore eum, consequuntur eaque expedita praesentium
            asperiores porro? Blanditiis repellendus est deleniti dolorum
            voluptatem, eos provident facere? Nobis, totam! Amet ducimus quidem
            adipisci deleniti. Optio nihil quo totam aliquam saepe minus
            possimus nulla fuga amet libero, atque officia quis maxime dolorem
            iure, doloremque nostrum pariatur molestiae sapiente at placeat. Qui
            sed nostrum atque dolor, vero est modi, natus veniam pariatur cumque
            nulla? Cupiditate repudiandae libero impedit neque magnam unde
            tempora, necessitatibus, aliquam dolorum obcaecati tenetur iusto!
            Repudiandae, reprehenderit ad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
