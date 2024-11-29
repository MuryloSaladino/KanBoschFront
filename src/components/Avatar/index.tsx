import { ComponentPropsWithoutRef, forwardRef } from "react"
import styles from "./styles.module.css"

interface IAvatarProps extends ComponentPropsWithoutRef<'img'> {
    size?: "small" | "medium" | "large"
    username?: string
}

const Avatar = forwardRef<HTMLImageElement, IAvatarProps>(
    ({ className, username = "user", size = "medium", src, ...props }, ref) => (
        <div className={`${styles[size]} ${styles.avatar_container}`}>
            {
                src ?
                <img 
                    ref={ref}
                    alt={username || "Avatar"}
                    className={`${styles.avatar} ${className || ""}`}
                    {...props}
                /> : 
                <div className={`${styles.avatar} ${className || ""}`}>
                    { username.abreviate() }
                </div>
            }
            {
                username &&
                <span className={styles.tooltip}>
                    { username }
                </span>
            }
        </div>
    )
)

export default Avatar
