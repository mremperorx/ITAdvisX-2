const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black opacity-90 z-50">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 4px solid rgba(0, 0, 0, 0.1); 
          border-radius: 50%;
          border-top: 4px solid #3498db; 
          width: 50px;
          height: 50px;
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
