import { CloudIcon } from '@/icons'
import { DATA_INFO } from './dataInfo'

const AuthInfo = () => {
  return (
    <aside className="w-full lg:w-1/2 bg-third min-h-full flex flex-col items-center justify-center gap-10 px-3 2xl:px-20">
      <header className="hidden lg:flex flex-col items-center text-first select-none">
        <div className="flex items-center gap-1">
          <h1 className="font-black text-4xl xl:text-5xl">FO Cloud</h1>

          <CloudIcon className="size-12 xl:size-16" />
        </div>

        <h2 className="text-first/90 text-center text-base xl:text-xl text-pretty">
          Subí y accedé a tus archivos de forma simple y segura desde cualquier
          lugar
        </h2>
      </header>

      <div className="flex flex-col gap-3 py-5 lg:py-0">
        {DATA_INFO.map((data) => (
          <article
            key={data.id}
            className="flex flex-col gap-2 bg-first/20 rounded-xl border-first/40 border-2 p-2 xl:p-3"
          >
            <div className="flex items-center gap-3">
              <data.icon className="size-7 xl:size-8 text-third h-full bg-first/80 rounded-md p-1" />
              <h3 className="text-first font-bold text-base xl:text-xl">
                {data.title}
              </h3>
            </div>

            <p className="text-first/90 font-semibold text-sm xl:text-base">
              {data.description}
            </p>
          </article>
        ))}
      </div>
    </aside>
  )
}

export default AuthInfo
