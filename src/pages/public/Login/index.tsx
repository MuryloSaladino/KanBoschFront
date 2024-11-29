import { IFormInput } from "@/components/Form/types"
import styles from "./styles.module.css"
import Form from "@/components/Form"
import { z } from "zod"
import Text from "@/components/Text"

interface ILoginPayload {
    email: string
    password: string
}

export default function Login() {

    const fields:IFormInput[] = [
        { fieldName: "email", label: "email", zodSchema: z.string().email() },
        { fieldName: "password", label: "password", required: true }
    ]

    const submit = async (data:ILoginPayload) => {
        console.log(data)
    }

    return(
        <div className={styles.background} >
            <div className={styles.container}>
                <Text fontSize="xl3" fontWeight="semibold" textAlign="center">KanBosch</Text>

                <Form
                    fields={fields}
                    onSubmit={submit}
                    submitText="login"
                />
            </div>
        </div>
    )
}