import ApiLogo from '@/shared/ApiLogo';
import GithubLogo from '@/shared/GithubLogo';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-green-700'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2'>
        <Link href='/' className='flex items-center'>
          <ApiLogo />
          <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
            API Collection
          </span>
        </Link>
        <div className='flex items-center gap-5'>
          <Link href='https://github.com/gdsc-fetju/api-collection/blob/6c9bc4e761f40ebc3476c1a12c7fdcb5541ba2e8/CONTRIBUTING.md'>
            <button
              type='button'
              className='mr-3 rounded-lg bg-pink-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 md:mr-0'
            >
              Add API
            </button>
          </Link>
          <Link href='https://github.com/gdsc-fetju/api-collection'>
            <GithubLogo />
          </Link>
        </div>
      </div>
    </nav>
  );
}
