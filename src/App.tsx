import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Footer from './Footer';
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-center">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-white text-2xl sm:text-4xl mb-6">
          We will be back SOON
        </h1>

        <DotLottieReact
          src="https://lottie.host/d8f8e8c8-9f08-4fae-bb50-a8c7e0288a2b/5VVC6pN04X.lottie"
      loop
      autoplay
    />
  );
};

"
          loop
          autoplay
          style={{ width: "200px", height: "200px" }}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
