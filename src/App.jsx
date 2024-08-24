export default function App() {
    const USER_STATUS = 'VERIFIED';

    switch(USER_STATUS) {
        case 'NOT_VERIFIED':
            return (
                <div>
                    <span>
                        you are not verified.
                    </span>
                </div>
            );
        case 'VERIFIED':
            return (
                <div>
                    <span>
                        you are verified. congrats! click here to access your dashboard.
                    </span>
                </div>
            );
        case 'ACCOUNT_DISABLED':
            return (
                <div>
                    <span>account disabled</span>
                </div>
            );
        default:
            return (
                <div>
                    <span>please contact admin.</span>
                </div>
            );
    }
}
