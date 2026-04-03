/**
 * LoadingFallback Component
 * 
 * A loading spinner/fallback component for React.lazy() Suspense boundaries.
 * Displays a centered loading spinner with the AG Design branding.
 * 
 * @component
 */
const LoadingFallback = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="w-16 h-16 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 131 203"
            fill="none"
            className="w-full h-auto"
          >
            <path
              d="M101.441 162.09C118.861 154.112 131 136.228 131 115.446C131 87.2322 108.641 64.3635 81.0574 64.3635C80.4786 64.3635 79.9038 64.3759 79.3331 64.3966L54.1979 1.09777C53.9308 0.422964 53.2994 -0.0200038 52.5749 0.000695661C51.8625 0.0131153 51.2351 0.468503 50.9882 1.15158L0.106575 142.206C-0.221275 143.117 0.232049 144.131 1.12656 144.466C1.32489 144.541 1.52321 144.574 1.72154 144.574C2.42177 144.574 3.08152 144.135 3.33651 143.423L44.7388 28.6487L60.6821 68.7973C43.2574 76.7707 31.1148 94.6592 31.1148 115.446C31.1148 143.659 53.4734 166.528 81.0574 166.528C87.1004 166.528 92.8924 165.431 98.2514 163.419L113.531 201.903C113.802 202.586 114.446 203 115.126 203C115.34 203 115.559 202.959 115.773 202.872C116.656 202.507 117.076 201.481 116.72 200.578L101.437 162.09H101.441ZM122.541 115.446C122.541 132.605 112.584 147.381 98.2554 154.067L67.057 75.4957C70.8333 74.1088 74.8647 73.2684 79.0579 73.0655L101.485 129.55C101.842 130.453 102.849 130.883 103.728 130.519C104.61 130.155 105.031 129.128 104.675 128.225L82.7695 73.0573C104.885 73.9763 122.541 92.6017 122.541 115.446ZM46.5076 23.7429L52.6801 6.63279L75.7187 64.6533C71.5983 65.1004 67.6277 66.0609 63.8715 67.4684L46.5076 23.7429ZM81.0574 157.871C58.1483 157.871 39.5741 138.873 39.5741 115.441C39.5741 98.2816 49.5351 83.5022 63.8675 76.8163L95.0659 155.387C90.6905 156.993 85.9752 157.871 81.0574 157.871Z"
              fill="url(#paint0_linear_loading)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_loading"
                x1="0.00133942"
                y1="101.498"
                x2="131"
                y2="101.498"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A6A6A6" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-light text-sm font-medium tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingFallback;

