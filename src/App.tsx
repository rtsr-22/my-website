import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Footer from './Footer';
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-center">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-white text-2xl sm:text-4xl mb-6">
          We will be back SOONNNNNNNN
        </h1>

        <DotLottieReact
          src="https://lottie.host/ad415870-8a7e-4636-a990-02fa62e5202a/nYUbmUMo12.lottie"
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
