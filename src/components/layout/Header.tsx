import { FiCloudSnow, FiGithub, FiMoon } from 'react-icons/fi';

import useDarkMode from '@/lib/theme/useDarkMode';

import UnstyledLink from '@/components/links/UnstyledLink';
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [theme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    void new Audio('/audio/pop.mp3').play();
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 transition duration-200">
      <div className="layout flex h-14 items-center justify-between mx-4">
        <UnstyledLink
          href="/"
          openNewTab={false}
          className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-spray-400 to-spray-800 transition-colors duration-300 hover:text-spray-900 dark:hover:text-spray-500"
        >
          meditate.app
        </UnstyledLink>
        <div className="flex items-center">
          <nav>
            <ul className="flex items-center justify-between space-x-4">
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                  >
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center border-l border-slate-200 mx-2 dark:border-gray-600 justify-evenly">
            <div
              className="mx-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:cursor-pointer rounded-lg p-1"
              onClick={toggleTheme}
            >
              {theme == 'light' ? (
                <FiMoon className="w-6 h-6" color="black" />
              ) : (
                <FiCloudSnow className="w-6 h-6" color="white" />
              )}
            </div>
            <div className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg p-1">
              <UnstyledLink
                href="https://github.com/RiceCX/Meditate"
                openNewTab
              >
                <FiGithub
                  className="w-6 h-6"
                  color={theme === 'light' ? 'black' : 'white'}
                />
              </UnstyledLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
