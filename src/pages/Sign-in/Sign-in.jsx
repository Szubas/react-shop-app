import { SignInForm } from "../../components/Sign-in-form/Sign-in-form"

export const SignIn = () => {
    const user = localStorage.getItem("user")
    const logout = () => {
        localStorage.clear()
    }

    return (
        <div>
            {
                user === null
                    ?
                    <SignInForm />
                    :
                    <>
                        <h1>Welcome {user}, you already loged in.</h1>
                        <button onClick={() => { logout() }}>Logout</button>
                    </>
            }
        </div>
    )
}
