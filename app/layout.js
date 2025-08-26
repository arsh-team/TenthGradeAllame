// Made by the guy you copied from


import './globals.css'

export const metadata = {
  title: 'داشبورد دانش‌آموزان',
  description: 'صفحه اصلی با فونت وزیر',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-vazirmatn">
        {children}
      </body>
    </html>
  )
}
