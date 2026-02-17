import React from 'react';

const SocialLogin: React.FC = () => {
  return (
    <div className="flex justify-center gap-4">
      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        Google
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;