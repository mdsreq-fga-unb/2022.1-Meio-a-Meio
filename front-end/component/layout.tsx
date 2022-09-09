import NavBar from "./NavBar";
import styles from "../styles/Home.module.css";

export default function Layout(props){
    return (
        <div className={styles.layout}>
        <NavBar/>
        {props.children}
        </div>
    );
}