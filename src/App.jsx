import { UserProfile } from "./components/UserProfile";

export default function App() {
    const callMe = () => {
        console.log("hello");
    };
    
    return (
        <div>
            <h1>root component</h1>
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
        </div>
    );
}
