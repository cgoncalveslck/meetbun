export const BottomNav = (): JSX.Element => {
  return (
    <>
      <div class="fixed z-50 p-1 max-w-lg bg-white border border-gray-200 rounded-full bottom-4 left-4 dark:bg-gray-700 dark:border-gray-600">
        <div class="flex items-center justify-center flex-col">
          <a href="/docs" class="rounded-full dark:hover:bg-gray-800">
            {/* TODO: REDIRECT TO DOCS */}
            <button
              type="button"
              class="inline-flex items-center justify-center w-10 h-10 font-medium bg-white-600 rounded-full"
            >
              <svg
                width="24px"
                height="26px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#fff"
              >
                <path
                  d="M19 3L5 3C3.89543 3 3 3.89543 3 5L3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7 7L17 7"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7 12L17 12"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7 17L13 17"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="sr-only">Docs</span>
            </button>
          </a>
          <a href="/" class="rounded-full dark:hover:bg-gray-800">
            <button
              type="button"
              class="inline-flex items-center justify-center w-10 h-10 font-medium bg-white-600 rounded-full group focus:ring-4"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                width="24px"
                height="24px"
                color="#fff"
                fill="#fff"
              >
                <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z" />
              </svg>
              <span class="sr-only">Docs</span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
