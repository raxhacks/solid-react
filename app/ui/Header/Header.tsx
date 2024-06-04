import Pages from './Pages'
// jsdoc afert type
type HeaderProps = {}
/**
 * Header Component
 * Render logic can be applied here (e.g. conditional rendering, mapping, etc.)
 */
const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-[#060912] h-20 w-full
    inline-flex justify-end items-center gap-12 p-4">
      <Pages />
    </header>
  )
}

export default Header;