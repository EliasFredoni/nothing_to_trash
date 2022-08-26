import LogoutButton from "./LogoutButton"
import "./sidebaruserprofil.scss"
import { useEffect } from "react"
import { apiBaseUrl } from "./../api";
import { Link } from "react-router-dom";

const SidebarUserProfil = ({ token, userData, setUserData, setToken, setErrorMessage, setShowSidebarUserProfil, allProducts }) => {

    useEffect(() => {
        fetch(apiBaseUrl + "users/userprofil", {
            headers: { token: `JWT ${token}` },
        })
            .then((res) => res.json())
            .then((profilData) => {
                if (!profilData._id) {
                    setErrorMessage(profilData.message || "Error loading user data.");
                    return;
                }
                setUserData(profilData);
                console.log(profilData)
            });
    }, [token, setErrorMessage, setUserData, allProducts]);

    return (<div className="sidebaruserprofil">
        <h2>{userData.username}</h2>
        <Link className="sidebaruserprofil_a" to="/usersproducts">Meine Produkte</Link>
        <p className="sidebaruserprofil_a" to="">Mein Wunschzettel</p>
        <LogoutButton setToken={setToken} setShowSidebarUserProfil={setShowSidebarUserProfil} />
    </div>);
}

export default SidebarUserProfil;