export const NotFound = (): JSX.Element => {
  return (
    <div class="flex flex-col items-center justify-center min-h-[560px] gap-2 text-center">
      <div class="space-y-2 mb-10">
        <h1 class="text-3xl font-bold tracking-tighter dark:text-shade-200">
          <span class="dark:text-emerald-400 text-3xl">Oops!</span> <br /> Page
          Not Found
        </h1>
        <p class="max-w-[600px] dark:text-emerald-100 text-gray-500">
          We can't seem to find the page you're looking for.
        </p>
      </div>
      <a href="/">
        <span class="flex flex-row h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow-md gap-1 bg-shade-50 text-shade-900">
          <p>Go to the Home Page</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </a>
    </div>
  );
};
