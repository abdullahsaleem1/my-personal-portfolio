import Link from 'next/link';
import ASLogo from '@/components/common/ASLogo';

const navItems = [
  { id: 1, name: 'Home', url: '#home' },
  { id: 2, name: 'About', url: '#about' },
  { id: 3, name: 'Process', url: '#work-process' },
  { id: 4, name: 'Portfolio', url: '#projects' },
  { id: 5, name: 'Blog', url: '#blog' },
  { id: 6, name: 'Services', url: '#services' },
  { id: 7, name: 'Contact', url: '#contact' },
];

const copyrightYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <Link href="/" className="flex items-center border-0 no-underline">
          <ASLogo className="h-10 w-10 sm:h-12 sm:w-12" />
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold text-neutral-200">
            Abdullah
          </p>
        </Link>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-xs sm:text-base text-neutral-200 no-underline"
              href={item.url}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
        <p className="text-xs sm:text-base text-neutral-200">
          Copyright &copy; {copyrightYear} Abdullah Saleem.
        </p>
      </div>
      <p className="text-white text-center text-xs md:text-sm w-full py-10">
        Built with ❤️ using Next.js & Tailwind CSS
      </p>
    </div>
  );
}