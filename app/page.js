// Made by the guy you copied from


import { Card, CardContent } from "./components/ui/card"


const iranianStudents = [
  { id: 1, name: "کوچولو", age: 9, city: "شهر قدس" },
  { id: 2, name: "بقیه بچه ها", age: 15, city: "شهر قدس" },
]

const foreignStudents = [
  { id: 1, name: "امیرعباس ملازاده", age: 16, city: "کابل" },
]

export default function Home() {
  return (
    <main
    className="min-h-screen bg-gradient-to-br text-white flex flex-col items-center py-12"
    style={{
      fontFamily: 'vazir', 
      backgroundColor: "rgba(0,126,255,1)",
      backgroundImage: `
        radial-gradient(at 83% 46%, rgba(255,168,173,1) 0%, transparent 50%),
        radial-gradient(at 73.21% 72.485%, rgba(87,87,255,1) 0%, transparent 50%),
        radial-gradient(at 52% 3%, rgba(117,130,240,1) 0%, transparent 50%),
        radial-gradient(at 32% 46%, rgba(15,38,101,1) 0%, transparent 50%),
        radial-gradient(at 26% 98%, rgba(255,132,107,1) 0%, transparent 50%),
        radial-gradient(at 15.473% 78.439%, rgba(194,238,255,1) 0%, transparent 50%),
        radial-gradient(at 27% 81%, rgba(223,91,230,1) 0%, transparent 50%)
      `,
    }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 drop-shadow-lg">
         دانش‌آموزان دهم ریاضی
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 max-w-6xl">
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">دانش‌آموزان ایرانی</h2>
            <ul className="space-y-3">
              {iranianStudents.map((s) => (
                <li
                  key={s.id}
                  className="bg-white/20 p-4 rounded-xl flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-sm opacity-80">{s.city}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-700 text-sm">
                    {s.age} ساله
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">دانش‌آموزان اتباع</h2>
            <ul className="space-y-3">
              {foreignStudents.map((s) => (
                <li
                  key={s.id}
                  className="bg-white/20 p-4 rounded-xl flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-sm opacity-80">{s.city}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-700 text-sm">
                    {s.age} ساله
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
