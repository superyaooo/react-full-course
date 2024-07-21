import { UserProfile } from "./components/UserProfile";

export default function App() {
    const callMe = () => {
        console.log("hello");
    };
    
    return (
        <>
            <UserProfile 
                age={21} 
                isLoggedIn={true}
                username="Bob"
                callMe={callMe}
                favoriteFoods={[
                    {
                        name: "Sushi",
                        id: "sushi"
                    },
                    {
                        name: "ramen",
                        id: "ramen"
                    },
                ]}
            />
        </>
    );
}
