export default function Navigation({ route }) {
    const navigationClass = {
        selected: "mx-4 -mb-4 after:inline-block after:w-full after:h-1.5 after:bg-yellow-300 after:rounded-full after:transition-all after:duration-300 leading-4 cursor-default",
        default: "mx-4 -mb-4 after:inline-block after:w-full after:h-1.5 after:bg-gray-200 after:rounded-full after:mt-0.5 after:-mb-0.5 after:opacity-0 after:transition-all after:duration-300 leading-4 cursor-pointer"
    }

    return (
        <nav className="bg-white w-full py-6 px-12 lg:px-28 fixed top-0 left-0 z-[10] flex justify-start items-center flex-row shadow-lg">
          <h1 className="text-3xl lg:text-4xl font-bold">ethic<span className="text-yellow-300">ally</span>.</h1>

          <div className="hidden lg:flex w-full justify-end items-center flex-row text-lg font-medium">
            <a href={route === 1 ? "" : "/"} className={route === 1 ? navigationClass.selected : navigationClass.default}>Home</a>
            <a href={route === 2 ? "" : "/learn"} className={route === 2 ? navigationClass.selected : navigationClass.default}>Learn</a>
            <a href={route === 3 ? "" : "/about"} className={route === 3 ? navigationClass.selected : navigationClass.default}>About</a>
            <a href="http://otn2023.fun" className={navigationClass.default}>OTN 2023</a>
            <a href="/register" className="mulai ml-4 p-3 px-6 bg-amber-300 rounded-full text-white text-xl font-semibold shadow-lg hover:bg-yellow-300 hover:shadow-xl transition-all duration-300 cursor-pointer">Mulai<i className="ml-3 fa-solid fa-arrow-right transition-all"></i></a>
          </div>
        </nav>
    )
}