import { useWeb3Auth } from "@/services/web3auth";

export default function Account() {
    const { provider, login, logout, getUserInfo } = useWeb3Auth();

    const loggedInView = (
      <>
        <button onClick={getUserInfo} >
          Get User Info
        </button>
  
        <button onClick={logout} >
          Log Out
        </button>
      </>
    );
  
    const unloggedInView = (
      <button onClick={login}>
        Login
      </button>
    );
  
    return <div className="text-white">{provider ? loggedInView : unloggedInView}</div>;
}
