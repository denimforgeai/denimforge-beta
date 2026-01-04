import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 gradient-bg">
      <div className="w-full max-w-md p-8 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl glow">
        <div className="text-center mb-8">
          <img
            src="/logo.jpg"
            alt="DenimForge Logo"
            className="mx-auto h-20 mb-6 glow"
          />
          <h1 className="text-3xl font-bold mb-2 text-white">
            Sign Up for DenimForge Beta
          </h1>
          <p className="text-gray-300">
            Create your account to access early features
          </p>
        </div>

        <SignUp
          redirectUrl="/dashboard"
          afterSignUpUrl="/dashboard"
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-transparent shadow-none border-none",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              formButtonPrimary:
                "bg-primary hover:bg-purple-700 text-black font-semibold py-3 rounded-xl w-full transition-all glow",
              socialButtonsBlockButton:
                "bg-gray-800 hover:bg-gray-700 border-gray-600 text-white py-3 rounded-xl w-full mb-3 transition-all",
              formFieldInput:
                "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary",
              formFieldLabel: "text-gray-300",
              dividerLine: "bg-gray-700",
              dividerText: "text-gray-400",
              footerActionLink: "text-primary hover:text-purple-400",
            },
          }}
        />
      </div>
    </div>
  );
}