// components/LoadingSpinner.tsx
const LoadingSpinner = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white opacity-90 z-50">
        <div className="loader"></div>
        <style jsx>{`
          .loader {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-top: 4px solid #333;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  };
  
  export default LoadingSpinner;
  