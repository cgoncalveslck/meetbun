export const LoginForm = (): JSX.Element => {
  return (
    <div class="flex flex-col items-center justify-center px-4 py-8 mx-auto h-screen md:w-1/2 w-full">
      <div class="w-full dark:border-emerald-500 border-4 bg-white rounded-lg shadow">
        <div class="p-6 space-y-4">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900">
            Create an account
          </h1>
          <form class="space-y-4 md" hx-post="/api/login" hx-swap="none">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-slate-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
              placeholder="name@company.com"
              required
            ></input>

            <div class="login-button">
              <span class="htmx-indicator">
                <img src="/public/svg/grid.svg"></img>
              </span>
              <button
                style="position: relative"
                class="w-full text-gray bg-emerald-400 hover:bg-emerald-500 focus:bg-emerald-600 focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Signup
              </button>
            </div>

            <p class="text-sm font-light text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                class="font-medium text-primary-600 hover:underline"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
