import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handlePaymentTest = () => {
        navigate('/payment');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-blue-600 mb-6">
                        Welcome to SpeedPesa API Test
                    </h1>
                    
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Simple Payment Integration Testing
                        </h2>
                        <p className="text-gray-600 mb-6">
                            This is a demonstration project to test SpeedPesa payment integration.
                            Use the button below to simulate a test payment transaction.
                        </p>
                        
                        <button
                            onClick={handlePaymentTest}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Test Payment
                        </button>
                    </div>

                    <div className="text-sm text-gray-500">
                        <p>🔒 Safe and secure payment testing environment</p>
                        <p>⚡ Fast and reliable integration</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;