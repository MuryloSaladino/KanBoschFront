import { MouseEventHandler, useState } from "react";
import styles from "./styles.module.css"
import Icon from "@/components/Icon";
import internalAPI from "@/service/internal.services";

interface IMenuProps {
    open: boolean;
    handleClose: () => void;
}

export default ({ open, handleClose }:IMenuProps) => {

    const handleModalClick:MouseEventHandler = (e) => {
        e.stopPropagation()
    }

    const fetchNotifications = async () => {
        const { success, data, showMessage } = await internalAPI.get("/notifications");

        if(success && data){
            setNotifications(data)
        }
        if(fee)

    }
 
    return (
        <div 
            className={`${styles.backdrop} ${open ? styles.backdrop_showing : styles.backdrop_closing}`}
            onClick={handleClose}
        >
            <div 
                className={`${styles.menu} ${open ? styles.menu_showing : styles.menu_closing}`}
                onClick={handleModalClick}
            >
                <Icon 
                    name="close"
                    size="lg"
                    className={styles.close_button}
                    onClick={handleClose}
                >X</Icon>

                <div className={styles.link_list}>
                    <h1>Notifications</h1>
                    <div className={styles.notif_list}>
                        <div className={styles.notif_box}>
                            oi
                        </div>
                    </div>
                    <h1>Workspaces</h1>

                </div>
            </div>
        </div>
    )
}