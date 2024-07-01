type Props = {
  isOpen: boolean;
  toggle: () => void;
};

function Hamburger({ toggle, isOpen }: Props) {
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      onClick={toggle}
      className={`group absolute top-0 flex flex-col justify-center items-center h-10 w-10 z-10 ${
        isOpen ? "right-2" : "right-1/2 translate-x-1/2"
      }`}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}

export default Hamburger;
