import './globals.css'

import ReduxProvider from './store/provider'; 


export const metadata = {
  title: 'lesson',
  description: 'learn next JS and react',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
