import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div className={styles.container}>
      <Loader show />
      <button
        onClick={() => {
          toast.success("hello toast!");
        }}
      >
        Toste me
      </button>
    </div>
  );
}
