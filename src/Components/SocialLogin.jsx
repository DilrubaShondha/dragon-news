import { FaGoogle, FaGithub  } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className="mb-5">
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="*:w-full space-y-2">
                <button className="btn bg-white border"><FaGoogle /> Login With Google</button>
                <button className="btn bg-white border px-10"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;